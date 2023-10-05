import { ArticleCard } from './components/ArticleCard/ArticleCard'
import { articles } from './data/articles'
import { ProjectCard } from './components/ProjectCard/ProjectCard'
import { projects } from './data/projects'
import './App.css'


function App() {
  // React rendrer lister med JSX
  // Det er fult mulig å filtrere eller modifisere
  // disse listen før vi genererer JSXen
  const articleSlice = articles.slice(0, 5)

  return (
    <div className='App'>
      <header>
        <h1>React and Data</h1>
      </header>

      <div className='card'></div>

      <main>
        <section className='list'>
          <h2>Articles</h2>
          {
            // Array.map er en løkke vi bruker får å lage en
            // ny liste basert på en annen liste
            // Vi bruker den her for å lage en liste med
            // JSX Elementer fra en liste med data objekter
            articleSlice.map((article) => <ArticleCard key={article.slug} data={article} />)
          }
        </section>

        <section className='list'>
          <h2>Projects</h2>
          {
            projects.map(project => <ProjectCard key={project.id} data={project} />)
          }
        </section>

      </main>

      <footer>
        <p>Modul D</p>
      </footer>
    </div>
  )
}

export default App
