import { promises as fs } from 'fs';
import Image from 'next/image';
import { dbConnection } from '../db';

export default async function ArticleView({ params }) {
  const db = await dbConnection();
  const Article = db.Article;


  const article = await Article.findByPk(params.id)

  return <article>
    {article.image && <div className='relative aspect-video mb-3'>
      <Image fill src={article.image} quality={85} />
    </div>}

    <h1 className='text-2xl font-bold mb-4'>{article.title}</h1>
    <section>{article.content}</section>
  </article>
}