function FilmCard(props) {
  return (
    <article className="film-card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>Runtime: {props.runtime}</p>
      <p>Form: {props.form}</p>
      <p>Country: {props.country}</p>
      {props.onShowCredits && (
  <button onClick={() => props.onShowCredits(props.credits)}>
    Show credits
  </button>
)}
{props.isCreditsVisible && (
  <p className="film-credits">{props.credits}</p>
)}
    </article>
  )
}

export default FilmCard
