import React from 'react'
export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-14">
      <div className="mx-auto max-w-[820px] px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  )
}
