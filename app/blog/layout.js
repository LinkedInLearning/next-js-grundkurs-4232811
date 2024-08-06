import ArticleList from '@/components/ArticleList';
import { promises as fs } from 'fs';

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

      <ArticleList articles={articles}
        linkClass='text-orange-700'
      />
    </section>
  </div>;
}