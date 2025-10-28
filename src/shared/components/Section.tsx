import React from 'react'
export function Section({
  id,
  title,
  children,
  headerRight,
}: {
  id: string
  title: string
  children: React.ReactNode
  headerRight?: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-14">
      <div className="mx-auto max-w-[820px] px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[color:var(--color-text-primary)]">{title}</h2>
          {headerRight ? <div>{headerRight}</div> : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
