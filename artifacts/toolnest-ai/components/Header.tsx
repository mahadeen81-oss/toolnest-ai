import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-violet-100/80 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-indigo-600 text-white font-bold shadow-sm">
            T
          </span>
          <span className="text-lg font-semibold text-slate-900">ToolNest AI</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <Link href="/tools" className="hover:text-brand-600">AI Tools</Link>
          <Link href="/blog" className="hover:text-brand-600">Blog</Link>
          <Link href="/about" className="hover:text-brand-600">About</Link>
          <Link href="/contact" className="hover:text-brand-600">Contact</Link>
        </nav>

        <Link
          href="/tools"
          className="rounded-lg bg-gradient-to-r from-brand-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:from-brand-600 hover:to-indigo-700 hover:shadow-md active:translate-y-0"
        >
          Explore Tools
        </Link>
      </div>
    </header>
  );
}
