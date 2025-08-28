import React from "react";
export function IconLink({ href, label, Icon }:
  { href: string; label: string; Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}
       className="p-2 rounded-lg text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ring-offset-2 ring-offset-black">
      <Icon className="h-5 w-5" />
    </a>
  );
}