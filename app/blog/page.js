import ArticleList from '@/components/ArticleList';
import { promises as fs } from 'fs';
import { dbConnection } from './db';

export default async function Blog({ searchParams }) {
  const db = await dbConnection();
  const Article = db.Article;

  const searchValue = searchParams.searchValue ?? '';

  const articles = (await Article.findAll())
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
