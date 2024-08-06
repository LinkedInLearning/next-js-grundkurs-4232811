import { promises as fs } from 'fs';

export default async function ArticleView({ params }) {
  const jsonContent = await fs.readFile(
    process.cwd() +
    '/app/blog/articles.json',
    'utf-8'
  )

  const articles = JSON.parse(jsonContent);
  const article = articles[params.index];

  return <article>
    <h1 className='text-2xl font-bold mb-4'>{article.title}</h1>
    <section>{article.content}</section>
  </article>
}