# Deploying The Viking Company

This site is a **static export** (plain HTML/CSS/JS in `out/`) — about as light
as web hosting gets.

## Deploying with Coolify (the active path) ✅

The site runs on a Hetzner VPS via **Coolify**. Deploy it as a **static site** —
**do not** let Coolify build the Dockerfile (Coolify runs its own reverse proxy
on 80/443, so a Caddy-in-Dockerfile container collides with it and exits, which
shows up as `Error response from daemon: No such container: <coolify-id>`).

In the Coolify resource:

1. **Build Pack: Nixpacks** (not Dockerfile).
2. Toggle **"Is it a static site?" → ON**.
3. **Output / Publish Directory: `out`** (build command `npm run build`).
4. Set the **Domain (FQDN)** to `https://thevikingcompany.eu` — Coolify's proxy
   handles TLS automatically.
5. Deploy.

> The standalone Dockerfile / Caddyfile / docker-compose (for running *without*
> Coolify) were removed from the repo root because they conflict with Coolify's
> build-pack auto-detection. They remain in git history if you ever want the
> bare-Docker route — `git show <commit>:Dockerfile`.

---

## Appendix: bare-Docker route (no Coolify)

Only relevant if you ever drop Coolify. This site is a static export, so serving
it standalone is a single tiny Caddy container (well under ~50 MB RAM).

---

## 1. What to rent (and what it costs)

A static site needs almost nothing. The smallest Hetzner Cloud VPS is plenty:

| Plan | vCPU / RAM | ~Price | Verdict |
| --- | --- | --- | --- |
| **CAX11** (Arm64) | 2 / 4 GB | ~€3.79/mo | **Recommended** — cheapest, more than enough |
| CX22 (x86) | 2 / 4 GB | ~€4.5/mo | Use if you prefer x86 |

Either idles at a few % CPU and tens of MB RAM for this site. You could host a
dozen sites like it on one box. (Build happens inside the container; the 4 GB
plans build comfortably.)

> Note: the Dockerfile builds with `node:22-alpine`. If you pick an **Arm** plan
> (CAX), Docker pulls the Arm image automatically — no change needed.

---

## 2. One-time server setup

Create an **Ubuntu 24.04** server in the Hetzner console, add your SSH key, then:

```bash
ssh root@YOUR_SERVER_IP

# install Docker + compose plugin
curl -fsSL https://get.docker.com | sh

# (optional but recommended) basic firewall
ufw allow OpenSSH && ufw allow 80 && ufw allow 443 && ufw --force enable
```

---

## 3. Deploy

```bash
git clone https://github.com/NylasDev/the-viking-company.git
cd the-viking-company
docker compose up -d --build
```

That's it. Caddy starts, and **once DNS points at this server (step 5)** it
automatically obtains and renews a Let's Encrypt HTTPS certificate for
`thevikingcompany.eu`. Certs persist in the `caddy_data` volume across rebuilds.

Check it:

```bash
docker compose ps
docker compose logs -f web      # watch cert issuance
```

### Updating the site later

```bash
git pull
docker compose up -d --build    # rebuilds, keeps the cert volume
```

(Optional: a GitHub Action can SSH in and run those two commands on every push to
`main` — say the word and I'll add the workflow.)

---

## 4. Test BEFORE you touch the live domain

Don't point the real domain at the box until you've seen it work:

- Browse to `http://YOUR_SERVER_IP` — you'll get the site (with a cert warning,
  since the cert is issued per-hostname, not per-IP). That's enough to confirm
  it serves.
- **Better:** add a temporary DNS record `new.thevikingcompany.eu → A → SERVER_IP`,
  add `new.thevikingcompany.eu` to the `Caddyfile` hostnames, redeploy, and load
  `https://new.thevikingcompany.eu`. Now you've verified real HTTPS end-to-end.

---

## 5. Moving the domain off cPanel/WordPress (do this carefully)

Your current site is WordPress on cPanel. You do **not** delete anything to move
the domain — you just repoint DNS. The safe sequence:

1. **Find where DNS is managed.** Either at your **registrar** or at the **cPanel
   host's nameservers**. Whichever shows the live DNS zone is where you'll edit.
2. **⚠️ Protect your email first.** If `@thevikingcompany.eu` email runs on the
   cPanel host, the domain's **MX records** (and often a `mail.` A record) live
   there. Changing the **web** records does *not* affect email — but **cancelling
   cPanel hosting will kill that email.** So: only change the records below, and
   keep email where it is (or migrate it to a dedicated provider) before you
   cancel anything.
3. **Lower TTL** on the A/AAAA records to 300s a day ahead, so the cutover
   propagates fast.
4. **Cut over** — change these to your VPS:
   - `thevikingcompany.eu` → **A** → `SERVER_IP`  (and **AAAA** → IPv6 if enabled)
   - `www` → **A** → `SERVER_IP` (or CNAME → `thevikingcompany.eu`)
   - **Leave MX and any mail records untouched.**
5. Within minutes Caddy sees DNS resolve to the VPS and issues the real cert.
   Load `https://thevikingcompany.eu`.

### Should you delete the WordPress site?

**Not right away.** Recommended order:

1. Take a **full backup/export** of the WordPress site (cPanel → Backup, or a
   plugin) and keep it somewhere safe.
2. Cut over DNS (above) and run the new site for **1–2 weeks**.
3. Confirm email still works and you've copied anything you still need.
4. *Then* decommission: delete the WP install / cancel the cPanel plan.

If you cancel cPanel and it was also your **DNS host**, move DNS first — point the
registrar's nameservers to **Cloudflare DNS (free)** or the registrar's own DNS,
recreate the records there, and only then cancel cPanel. Cloudflare also makes
future record changes and TTLs trivial, and can sit in front for caching.

---

## 6. Simpler alternatives (optional)

Because it's a static site, you don't *have* to run a server at all:

- **Cloudflare Pages / Vercel / GitHub Pages** — connect the repo, free, global
  CDN, automatic HTTPS, deploy-on-push. Lowest effort if you don't need the VPS.
- **Native Caddy on the VPS** (no Docker) — `apt install caddy`, drop the
  `Caddyfile`, copy `out/` to `/srv`. Even lighter, one less layer.

The Docker path here is the right call if you want the site living on your own
Hetzner box alongside other things, with reproducible rebuilds.
