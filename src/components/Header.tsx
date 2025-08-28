import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconLink } from "./IconLink";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  function handleNameClick(e: React.MouseEvent) {
    e.preventDefault();
    if (pathname === "/") {
      document.getElementById("about")?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
    } else {
      navigate("/", { state: { scrollTo: "about" } });
    }
  }
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-[820px] px-4 py-3 flex items-center">
        <Link to="/" onClick={handleNameClick} className="text-lg font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ring-offset-2 ring-offset-black">
          Kyle Brooks
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <IconLink href="https://github.com/" label="GitHub" Icon={GithubIcon} />
          <IconLink href="https://linkedin.com/" label="LinkedIn" Icon={LinkedinIcon} />
        </div>
      </div>
    </header>
  );
}