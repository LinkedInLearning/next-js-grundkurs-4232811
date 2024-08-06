import Link from "next/link";

export function Nav() {
  return (
    <nav className="flex gap-3">
      <Link
        href="/"
        className="rounded-lg bg-slate-800 text-white p-4 block underline">
        Home
      </Link>

      <Link
        href="/blog"
        className="rounded-lg bg-slate-800 text-white p-4 block underline">
        Blog
      </Link>
    </nav>
  );
}
