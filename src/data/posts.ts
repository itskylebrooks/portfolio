export type Post = {
  title: string
  slug: string
  date: string
  summary: string
  body: string
}

export const POSTS: Post[] = [
  {
    title: 'Why I Build Minimal UIs',
    slug: 'why-minimal-uis',
    date: '2025-08-01',
    summary: 'Notes on clarity, speed, and the art of removing unnecessary weight.',
    body: `
      <h2>Less is guidance</h2>
      <p>Minimal UI reduces cognitive load. Fewer choices, clearer intent.</p>
      <h3>Practical recipe</h3>
      <pre><code>const keep = features.filter(f => value(f) &gt; weight(f))</code></pre>
      <p>Design is subtraction. Ship the core. Iterate.</p>
    `,
  },
  {
    title: 'From Notes to Projects',
    slug: 'from-notes-to-projects',
    date: '2025-08-05',
    summary: 'Turning scratchpads into small, shippable things.',
    body: `
      <h2>Start tiny</h2>
      <p>Write a note. Extract a task. Turn the task into a micro-project.</p>
      <h3>Loop</h3>
      <pre><code>note -&gt; task -&gt; tiny build -&gt; share</code></pre>
      <p>Momentum compounds. Small finished beats big unfinished.</p>
    `,
  },
]
