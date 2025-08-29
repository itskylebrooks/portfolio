declare module '*.mdx' {
  import type { ComponentType } from 'react'
  const MDXComponent: ComponentType<any>
  // Allow named export `meta` for frontmatter-like data
  export const meta: any
  export default MDXComponent
}
