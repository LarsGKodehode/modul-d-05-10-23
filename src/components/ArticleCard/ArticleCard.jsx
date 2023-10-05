import style from './ArticleCard.module.css'
console.log(style)

export function ArticleCard(properies) {
  // JavaScript Destructuring
  const { data } = properies

  return (
    <article className={style.card}>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </article>
  )
}
