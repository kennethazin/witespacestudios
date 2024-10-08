"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import PropTypes from "prop-types"; // ES6
import { ModeToggle } from "@/components/modeToggle"

const isPath = [
  { path: "/info", label: "info" },
  { path: "/work", label: "work" },
  { path: "/inquiry", label: "inquiry" },
  { path: "/about", label: "about" },
  { path: "/blog", label: "blog" },
];
export default function Navbar() {
  const currentPath = usePathname();

  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 sticky top-0 z-10">
      <Link
        href="/"
        className="flex items-center text-lg font-semibold"
      >
        <Logo className="h-20 w-20 flex p-5" />
        <span className="text-4xl tracking-[-0.1em] font-medium">
          witespace studios
        </span>
      </Link>
      <nav className="hidden items-center  md:flex font-extralight">
        {isPath.map(({ path, label }) => (
          <Link
            key={path}
            href={path}
            className={`text-s transition-colors hover:text-neutral-400 py-1 px-2 ${
              currentPath === path ? "underline" : ""
            }`}
          >
            [{label}]
          </Link>
        ))}

      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden ">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="grid gap-4 p-4 font-extralight">
            <div className="flex flex-row justify-between">
            <span className="text-2xl tracking-[-0.12em] font-medium ">
              witespace studios
            </span>
            </div>

            {isPath.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={`text-s transition-colors hover:text-neutral-400 ${
                  currentPath === path ? "underline" : ""
                }`}
              >
                [{label}]
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function Logo(props: any) {
  
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 510 510"
      xmlns="http://www.w3.org/2000/svg"
      fill="var(--text-color)"
    >
      <path d="M255 0L262.669 164.478C264.76 209.341 300.659 245.24 345.522 247.331L510 255L345.522 262.669C300.659 264.76 264.761 300.659 262.669 345.522L255 510L247.331 345.522C245.24 300.659 209.341 264.761 164.478 262.669L0 255L164.478 247.331C209.341 245.24 245.24 209.341 247.331 164.478L255 0Z" />
    </svg>
  );
}
