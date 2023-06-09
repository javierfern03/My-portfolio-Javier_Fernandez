
const CardProyects = ({ imgProyect, title, tecnologias, urlGithubLink, urlPageLink }) => {
  return (
    <article className="card">

      <img className="card__img" src={imgProyect} alt="" />

      <body className="card__body">
        <div className="card__body-container">
      <h3 className="card__title">{title}</h3>

          <div className="card__span__container">
            {
              tecnologias?.map(tecnologia => (
                <span key={tecnologia} className="card__span">{tecnologia}</span>
              ))
            }
          </div>
          <div className="card__btns">
            <div className="btn2">
              <span className="hover-underline-animation-footer">
                <a rel="noopener noreferrer" target="_blank" href={urlGithubLink}>Github</a>
              </span>
            </div>


            <div className="btn2">
              <span className="hover-underline-animation-footer">
                <a rel="noopener noreferrer" target="_blank" href={urlPageLink}>Home Page</a>
              </span>

            </div>
          </div>

        </div>
      </body>
    </article>
  )
}

export default CardProyects