import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-violet-100 bg-gradient-to-b from-violet-50/70 to-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-indigo-600 text-sm font-bold text-white shadow-sm">
              T
            </span>
            <span className="font-semibold text-slate-900">ToolNest AI</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-slate-500">
            Simple AI tools for everyday work &mdash; writing, content creation and productivity, without the learning curve.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Product</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li><Link href="/tools" className="hover:text-brand-600">AI Tools</Link></li>
            <li><Link href="/blog" className="hover:text-brand-600">Blog</Link></li>
            <li><Link href="/about" className="hover:text-brand-600">About</Link></li>
            <li><Link href="/contact" className="hover:text-brand-600">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li><Link href="/privacy-policy" className="hover:text-brand-600">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-brand-600">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} ToolNest AI. All rights reserved.
      </div>
    </footer>
  );
}
