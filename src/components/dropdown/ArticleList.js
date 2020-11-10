import Article from './articles'

export default function ArticleList({articles}) {
  const articleElements = articles.map(article =>
    <li className="articleListItem"><Article article={article}/></li>
    )
  return (
    <ul className="articleList">
      {articleElements}
    </ul>
  )
}