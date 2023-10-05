import style from './ProjectCard.module.css'

export function ProjectCard(properies) {
  const { data } = properies
  const { name, sourceCode, site } = data

  return (
    <article className={style.card}>
      <h2>{name}</h2>

      <footer>
        <a href={sourceCode}>SourceCode</a>
        <a href={site}>Site</a>
      </footer>
    </article>
  )
}