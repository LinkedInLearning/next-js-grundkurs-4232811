import { promises as fs } from 'fs';
import Link from 'next/link';

export default async function Blog() {
  const jsonContent = await fs.readFile(
    process.cwd() +
    '/app/blog/articles.json',
    'utf-8'
  )

  const articles = JSON.parse(jsonContent);

  return (
    <section>
      <ul className='flex flex-col gap-2'>
        {articles.map((article, i) => {
          return <li key={i}>
            <Link href={`/blog/${i}`} className='underline'>
              {article.title}
            </Link>
          </li>
        })}
      </ul>
    </section>
  );
}
