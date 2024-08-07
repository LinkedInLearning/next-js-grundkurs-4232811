import ArticleList from '@/components/ArticleList';
import { promises as fs } from 'fs';
import { dbConnection } from './db';

export default async function BlogLayout({ children }) {
  const db = await dbConnection();

  const articles = await db.Article.findAll({
    limit: 3
  })

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