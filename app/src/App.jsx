import FilmCard from "./components/FilmCard.jsx"
import { useState, useEffect } from "react"
import films from "./data/films.json"
const selectedCreditsKey = "film-folio-selected-credits"
function getInitialSelectedCredits() {
  const savedCredits = localStorage.getItem(selectedCreditsKey)

  if (savedCredits) {
    return JSON.parse(savedCredits)
  }

  return null
}
function App() {
  const [selectedForm, setSelectedForm] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCredits, setSelectedCredits] = useState(getInitialSelectedCredits)
  useEffect(() => {
  localStorage.setItem(
    selectedCreditsKey,
    JSON.stringify(selectedCredits)
  )
}, [selectedCredits])
const filteredFilms = films.filter((film) => {
  const matchesForm =
    selectedForm === "All" || film.form === selectedForm

  const matchesSearch =
    film.title.toLowerCase().includes(searchTerm.toLowerCase())

  return matchesForm && matchesSearch
})
const formOptions = ["All", ...new Set(films.map((film) => film.form))]
  return (
    <main>
      <header className="site-header">
  <p className="eyebrow">Fictional Film Archive</p>
  <h1>Film Folio</h1>
  <p className="site-intro">
    Explore essential film details, credits and stories from a collection of
    {` ${filteredFilms.length} `}films.
  </p>
</header>
      <div className="film-controls">
  <div className="search-control">
    <label htmlFor="film-search">Search films</label>

    <input
      id="film-search"
      type="search"
      placeholder="Search by title"
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
    />
  </div>

  <div className="form-control">
    <label htmlFor="form-filter">Filter by form</label>

    <select
      id="form-filter"
      value={selectedForm}
      onChange={(event) => setSelectedForm(event.target.value)}
    >
      {formOptions.map((form) => (
        <option key={form} value={form}>
          {form}
        </option>
      ))}
    </select>
  </div>
</div>

      <section className="film-grid">
        {filteredFilms.length === 0 && (
  <p className="empty-message">
    No films match your search. Try another title or film form.
  </p>
)}
        {filteredFilms.map((film) => (
  <FilmCard
    key={film.id}
    title={film.title}
    description={film.synopsis}
    runtime={`${Math.round(film.runtimeSeconds / 60)} minutes`}
    form={film.form}
    country={film.country}
    credits={`Director: ${film.directors.map((director) => director.name).join(", ")}`}
    isCreditsVisible={
  selectedCredits ===
  `Director: ${film.directors.map((director) => director.name).join(", ")}`
}
    onShowCredits={setSelectedCredits}
  />
))}
</section>

</main>
)
}
export default App