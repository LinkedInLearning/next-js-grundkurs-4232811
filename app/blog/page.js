import ArticleList from '@/components/ArticleList';
import { promises as fs } from 'fs';

export default async function Blog() {
  const jsonContent = await fs.readFile(
    process.cwd() +
    '/app/blog/articles.json',
    'utf-8'
  )

  const articles = JSON.parse(jsonContent);

  return (
    <section>
      <ArticleList articles={articles} />
    </section>
  );
}
