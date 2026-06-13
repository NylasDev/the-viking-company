# The Viking Company — Sergiu Vataman, AI Engineer

A one-page portfolio site for **The Viking Company** (Sergiu Vataman), positioning
the brand as AI engineering — autonomous agents, custom skills, tooling, and RAG
systems. Redesigned from the original WordPress site
([thevikingcompany.eu](https://thevikingcompany.eu)) in the **Hermes Agent /
Nous Research "engraved parchment"** aesthetic
([hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com)).

## Stack

Built with the **same framework as the Hermes Agent site**:

- **Next.js 15** (App Router) — statically exported (`output: "export"`), no server required
- **TypeScript**
- **Fonts:** EB Garamond (display serif) + IBM Plex Mono (mono), self-hosted via `next/font`
- **Styling:** hand-written CSS with the Hermes design tokens (no UI framework), in `app/globals.css`
- **Imagery:** public-domain Viking paintings turned into ink-on-parchment engravings with the `hermes-mythic-design` skill

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

Deploy the `out/` directory to any static host (Vercel, Netlify, Cloudflare
Pages, GitHub Pages, S3, etc.). No backend is needed — the contact path is a
`mailto:` plus social links.

## Where the content lives

| What | Where |
| --- | --- |
| Projects, expertise cards, social links, email | `lib/data.ts` |
| Hero headline / copy | `components/Hero.tsx` |
| About bio + values | `components/About.tsx` |
| Section copy | the matching `components/*.tsx` |
| Colors, type, spacing, responsive rules | `app/globals.css` (`:root` tokens at the top) |

## Imagery (the engravings)

The engraved WebP images are committed in `public/img/` — no extra steps needed
to run the site.

They were produced from public-domain Wikimedia paintings with the
**[`hermes-mythic-design`](https://github.com/NylasDev/hermes-mythic-design)**
skill (maintained in its own repo). The recipe, for reference:

```bash
# hero background (faded toward the text side)
python engrave.py moran-armada.jpg hero-armada.png \
  --style hatch --period 8 --contrast 1.45 --background --fade-direction left

# about plate
python engrave.py krohg-leiv.jpg about-leiv.png \
  --style hatch --period 7 --contrast 1.4
```

Outputs are then resized + converted to WebP for delivery. Source paintings used:

- Edward Moran — *Viking Armada* → hero
- Christian Krohg — *Leiv Eiriksson Discovers America* (1893) → about plate + contact backdrop
- (also downloaded: Roerich *Guests from Overseas*, Dicksee *Funeral of a Viking*)

### Skill improvement

The `hermes-mythic-design` skill's `engrave.py` was extended with a **`--gamma`**
tone-curve option: `--gamma 0.5–0.8` lifts shadows on dark/night photos so they
stop blocking up into solid ink (cleaner than just lowering `--contrast`);
`--gamma 1.2–1.6` deepens a washed-out image. The skill lives at
[github.com/NylasDev/hermes-mythic-design](https://github.com/NylasDev/hermes-mythic-design).

## The Work section

Projects are grouped into three tiers in `lib/data.ts` (edit copy/links there):

1. **Public-Sector & High-Stakes Systems** — e-Licitație (SEAP/SICAP) national
   procurement, e-Tarif Giurgiu bridge tolling, and internal taxation systems
   (the last shown as "Confidential · NDA", no link).
2. **Client Platforms & Products** — Bavaria Yachts Romania, Yacht One, Viking
   Bazar, Wheelmarket.
3. **Open Source & Experiments** — the GitHub repos.

Plus a **soul-project** strip for *Nerva Orbital* (YouTube), the youth passion
project.

## Notes / things to confirm

- **Nerva Orbital description** is intentionally generic — I couldn't determine
  what the channel actually contains, so the blurb in `lib/data.ts`
  (`soulProject`) avoids inventing specifics. Tell me what it is and I'll sharpen
  it.
- **Public-sector wording** in `lib/data.ts` says "engineering on" these systems
  rather than claiming sole authorship — adjust to match your exact role.
- **Discord** is the handle `nylas_` (a copy-to-clipboard chip, not a link, since
  a username has no canonical profile URL). Rationale: a Discord username alone
  exposes nothing sensitive; the only downside is unsolicited DMs.
- The original blog/"Newsroom" section was dropped in favour of a project/work
  focus; re-add a section if you want to publish articles.
