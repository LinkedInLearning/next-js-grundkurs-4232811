import Link from "next/link"

export default function ArticleList({ articles, linkClass }) {
  return <ul className='flex flex-col gap-2'>
    {articles.map((article, i) => {
      return <li key={i}>
        <Link href={`/blog/${i}`} className={`underline ${linkClass ? linkClass : ''}`}>
          {article.title}
        </Link>
      </li>
    })}
  </ul>
}