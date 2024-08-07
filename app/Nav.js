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

      <form
        className="flex ml-auto"
        action='/blog'
      >
        <input
          type='search'
          name='searchValue'
          placeholder="Artikelsuche..."
          className="border-2 rounded-lg w-48 indent-2"
        />
        <button
          type='submit'
          className="bg-slate-900 text-white p-4 rounded-lg"
        >Suchen</button>
      </form>
    </nav>
  );
}
