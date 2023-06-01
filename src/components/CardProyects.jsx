

const CardProyects = ({ imgProyect, title, text, tecnologias }) => {
  return (
    <article className="card">

      <h3 className="card__title">{title}</h3>
      <img className="card__img" src={imgProyect} alt="" />

      <body className="card__body">
        <div className="card__body-container">

          <p className="card__text">{text}</p>
          <div className="card__span__container">
            {
              tecnologias?.map(tecnologia => (
                <span key={tecnologia} className="card__span">{tecnologia}</span>
              ))
            }
          </div>
          <div className="card__btns">
            <div className="btn__container">
              <a className="btn" href="">
                <span className="btn__span">visitar</span>
              </a>
            </div>

            <div className="btn__container">
              <a className="btn" href="">
                <span className="btn__span">git</span>
              </a>
            </div>
          </div>

        </div>
      </body>
    </article>
  )
}

export default CardProyects