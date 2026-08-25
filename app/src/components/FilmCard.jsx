function FilmCard(props) {
  return (
    <article className="film-card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>Runtime: {props.runtime}</p>
      <p>Country: {props.country}</p>
    </article>
  )
}

export default FilmCard
