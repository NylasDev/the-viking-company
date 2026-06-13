// Decorative double-rule frame around the whole viewport — the "printed-plate"
// edge from the Hermes mythic design system. Purely visual; never intercepts
// clicks. Persists while scrolling.
export default function SiteFrame() {
  return <div className="site-frame" aria-hidden="true" />;
}
