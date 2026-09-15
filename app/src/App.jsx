import FilmCard from "./components/FilmCard.jsx"
import CreditsPanel from "./components/CreditsPanel.jsx"
import { useState, useEffect } from "react"
const selectedCreditsKey = "film-folio-selected-credits"
function getInitialSelectedCredits() {
  const savedCredits = localStorage.getItem(selectedCreditsKey)

  if (savedCredits) {
    return JSON.parse(savedCredits)
  }

  return null
}
function App() {
  const [selectedCredits, setSelectedCredits] = useState(getInitialSelectedCredits)
  useEffect(() => {
  localStorage.setItem(
    selectedCreditsKey,
    JSON.stringify(selectedCredits)
  )
}, [selectedCredits])
  return (
    <main>
      <h1>Film Folio</h1>

      <section className="film-grid">
        <FilmCard
          title="The Quiet Cartographer"
          description="A mapmaker records disappearing paths across a changing landscape."
          runtime="12 minutes"
          country="United Kingdom"
 credits="Director: Maya Reed · Cinematography: Elias Hart"      
onShowCredits={setSelectedCredits}
        />

        <FilmCard
          title="Borrowed Weather"
          description="Two strangers meet during a storm that seems to follow them."
          runtime="15 minutes"
          country="Ireland"
          credits="Director: Nora Blake · Cinematography: Theo Grant"
onShowCredits={setSelectedCredits}
        />

        <FilmCard
          title="Soft Machines"
          description="A technician discovers unexpected memories inside an old machine."
          runtime="10 minutes"
          country="France"
          credits="Director: Lena Moreau · Cinematography: Victor Chen"
onShowCredits={setSelectedCredits}
        />
      </section>
    {selectedCredits && (
  <CreditsPanel credits={selectedCredits} />
)}
    </main>
  )
}

export default App