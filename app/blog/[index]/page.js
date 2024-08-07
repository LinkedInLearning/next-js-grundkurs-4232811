import { promises as fs } from 'fs';
import Image from 'next/image';

export default async function ArticleView({ params }) {
  const jsonContent = await fs.readFile(
    process.cwd() +
    '/app/blog/articles.json',
    'utf-8'
  )

  const articles = JSON.parse(jsonContent);
  const article = articles[params.index];

  return <article>
    {article.image && <div className='relative aspect-video mb-3'>
      <Image fill src={article.image} quality={85} />
    </div>}

    <h1 className='text-2xl font-bold mb-4'>{article.title}</h1>
    <section>{article.content}</section>
  </article>
}