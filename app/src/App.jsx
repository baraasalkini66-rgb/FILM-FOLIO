import FilmCard from "./components/FilmCard.jsx"

function App() {
  return (
    <main>
      <h1>Film Folio</h1>

      <section className="film-grid">
        <FilmCard
          title="The Quiet Cartographer"
          description="A mapmaker records disappearing paths across a changing landscape."
          runtime="12 minutes"
          country="United Kingdom"
        />

        <FilmCard
          title="Borrowed Weather"
          description="Two strangers meet during a storm that seems to follow them."
          runtime="15 minutes"
          country="Ireland"
        />

        <FilmCard
          title="Soft Machines"
          description="A technician discovers unexpected memories inside an old machine."
          runtime="10 minutes"
          country="France"
        />
      </section>
    </main>
  )
}

export default App