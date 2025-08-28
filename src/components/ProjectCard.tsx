import { Link } from "react-router-dom";
import { ChevronRightIcon } from "./icons/ChevronRightIcon";
import type { Project, Accent } from "../data/projects";
import { cn } from "../utils/cn";

const ACCENT: Record<Accent, { border: string; bg: string; text: string }> = {
  red:   { border: "hover:border-red-500/60",   bg: "hover:bg-red-500/5",   text: "text-red-400" },
  green: { border: "hover:border-green-500/60", bg: "hover:bg-green-500/5", text: "text-green-400" },
  blue:  { border: "hover:border-blue-500/60",  bg: "hover:bg-blue-500/5",  text: "text-blue-400" },
  lilac: { border: "hover:border-purple-400/60",bg: "hover:bg-purple-400/5",text: "text-purple-300" },
};

export function ProjectCard({ p }: { p: Project }) {
  const accent = ACCENT[p.accent] || ACCENT.blue;
  return (
    <Link to={`/projects/${p.slug}`} className={cn(
      "group block border border-white/10 rounded-xl p-4 transition-transform duration-150",
      "hover:-translate-y-0.5",
      accent.border, accent.bg
    )}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm text-white/60 mb-1">{new Date(p.date).toLocaleDateString()}</div>
          <h3 className="text-lg text-white font-medium mb-1 group-hover:underline underline-offset-4">{p.title}</h3>
          <p className="text-white/80 mb-3">{p.summary}</p>
          <ul className="flex flex-wrap gap-2">
            {p.tech.map(t => (
              <li key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/80 border border-white/10">{t}</li>
            ))}
          </ul>
        </div>
        <ChevronRightIcon className={cn("h-5 w-5 mt-1 shrink-0", accent.text)} />
      </div>
    </Link>
  );
}