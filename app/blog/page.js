import ArticleList from '@/components/ArticleList';
import { promises as fs } from 'fs';

export default async function Blog({ searchParams }) {
  const jsonContent = await fs.readFile(
    process.cwd() +
    '/app/blog/articles.json',
    'utf-8'
  )

  const searchValue = searchParams.searchValue ?? '';

  const articles = JSON.parse(jsonContent)
    .filter(article => {
      return article.title
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    })

  return (
    <section>
      <ArticleList articles={articles} />
    </section>
  );
}
