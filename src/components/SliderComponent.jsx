import CardProyects from "./CardProyects"


const SliderComponent = () => {
  return (
    <div className="proyects__container">
      <div className="proyects__item">
        <CardProyects imgProyect='\charla.PNG' title={'Pokedex'} urlGithubLink={"https://github.com/javierfern03/poke-api"} urlPageLink={"https://poke-api-javier-fernandez.netlify.app/"} text={'hola a toodos este es mi protexto espero que les guste me costo mucho hacerlo le dedique mucho tiempo'} tecnologias={['html', 'css', 'javascript', 'react']} />
      </div>

      <div className="proyects__item">
        <CardProyects imgProyect='\charla.PNG' title={'Crud Users'} urlGithubLink={"https://github.com/javierfern03/CRUD-user"} urlPageLink={"https://crud-user-example.netlify.app/"} text={'hola a toodos este es mi protexto espero que les guste me costo mucho hacerlo le dedique mucho tiempo'} tecnologias={['html', 'css']} />
      </div>

      <div className="proyects__item">
        <CardProyects imgProyect='\charla.PNG' title={'Rick And Morty'} urlGithubLink={"https://github.com/javierfern03/Rick-And-Morty-api"} urlPageLink={"https://react-api-rick-and-morty.netlify.app/"} text={'hola a toodos este es mi protexto espero que les guste me costo mucho hacerlo le dedique mucho tiempo'} tecnologias={['html', 'css']} />
      </div>
      <div className="proyects__item">
        <CardProyects imgProyect='\charla.PNG' title={'Wheather App'} urlGithubLink={"https://github.com/javierfern03/Weather-app"} urlPageLink={"https://weather-app-react-v1.netlify.app/"} text={'hola a toodos este es mi protexto espero que les guste me costo mucho hacerlo le dedique mucho tiempo'} tecnologias={['html', 'css']} />
      </div>
      <div className="proyects__item">
        <CardProyects imgProyect='\charla.PNG' title={'Tres en Raya'} urlGithubLink={"https://github.com/javierfern03/Tres-en-raya"} urlPageLink={"https://javier-tres-en-raya.netlify.app/"} text={'hola a toodos este es mi protexto espero que les guste me costo mucho hacerlo le dedique mucho tiempo'} tecnologias={['html', 'css']} />
      </div>
    </div>

  )
}

export default SliderComponent