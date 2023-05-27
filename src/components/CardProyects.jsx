

const CardProyects = ({ imgProyect, title, text }) => {
  console.log(imgProyect)
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <img className="card__img" src={imgProyect} alt="" />
      <p className="card__text">{text}</p>
      <div className="card__btns">
        <button><a href="">repo</a></button>
        <button><a href="">visit</a></button>
      </div>
    </div>
  )
}

export default CardProyects