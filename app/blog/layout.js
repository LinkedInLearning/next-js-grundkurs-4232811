import { promises as fs } from 'fs';
import Link from 'next/link';

export default async function BlogLayout({ children }) {
  const jsonContent = await fs.readFile(
    process.cwd() +
    '/app/blog/articles.json',
    'utf-8'
  )

  const articles = JSON.parse(jsonContent).slice(0, 3);

  return <div>
    {children}

    <section className="mt-8 border-t pt-5">
      <h2 className="font-bold text-xl mb-3">Neueste Artikel</h2>

      <ul className='flex flex-col gap-2'>
        {articles.map((article, i) => {
          return <li key={i}>
            <Link href={`/blog/${i}`} className='underline text-orange-700'>
              {article.title}
            </Link>
          </li>
        })}
      </ul>
    </section>
  </div>;
}