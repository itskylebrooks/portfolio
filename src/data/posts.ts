export type Post = { title: string; slug: string; date: string; summary: string; body: string };
export const POSTS: Post[] = [
  { title: "Why I Build Minimal UIs", slug: "why-minimal-uis", date: "2025-08-01",
    summary: "Clarity and speed via subtraction.",
    body: `<h2>Less is guidance</h2><p>Minimal UI reduces load.</p>
           <pre><code>const keep = features.filter(f => value(f) &gt; weight(f))</code></pre>` },
  { title: "From Notes to Projects", slug: "from-notes-to-projects", date: "2025-08-05",
    summary: "Scratchpad → micro-builds.",
    body: `<h2>Start tiny</h2><p>Note → task → tiny build → share.</p>` },
];