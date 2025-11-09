import React from 'react'
import { Page } from '@/shared/components/Page'
import { Prose } from '@/shared/components/Prose'
import { useMetaTags } from '@/shared/hooks/useMetaTags'

export function WorkPage() {
  useMetaTags({
    title: 'Work',
    description: "Notes on process and philosophy for Kyle Brooks's projects.",
    author: 'Kyle Brooks',
    type: 'website',
  })

  return (
    <Page className="mx-auto max-w-[820px] px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-[color:var(--color-text-primary)]">Work</h1>
      </header>
      <Prose>
        <p>
          This page is still taking shape. It will become a space where I write about my process — how I think about design,
          build products, and refine ideas. For now, consider it as a placeholder for what will become the philosophy behind my projects.
        </p>
      </Prose>
    </Page>
  )
}
