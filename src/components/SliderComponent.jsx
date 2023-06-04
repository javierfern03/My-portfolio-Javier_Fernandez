import CardProyects from "./CardProyects"


const SliderComponent = () => {
  return (
    <div className="proyects__container-card">
      <div className="proyects__item">
        <CardProyects imgProyect='\charla.PNG' title={'Pokedex'} urlGithubLink={"https://github.com/javierfern03/poke-api"} urlPageLink={"https://poke-api-javier-fernandez.netlify.app/"} text={'Lorem ipsum dolor sit amet consectetur adipisipsa ea, aperiam ratione perferendis dolore sit  temporibus '} tecnologias={['html', 'css', 'javascript', 'react']} />
      </div>

      <div className="proyects__item">
        <CardProyects imgProyect='\charla.PNG' title={'Crud Users'} urlGithubLink={"https://github.com/javierfern03/CRUD-user"} urlPageLink={"https://crud-user-example.netlify.app/"} text={'Lorem ipsum dolor sit amet consectetur adipisipsa ea, aperiam ratione perferendis dolore sit temporibus rerum'} tecnologias={['html', 'css']} />
      </div>

      <div className="proyects__item">
        <CardProyects imgProyect='\charla.PNG' title={'Rick And Morty'} urlGithubLink={"https://github.com/javierfern03/Rick-And-Morty-api"} urlPageLink={"https://react-api-rick-and-morty.netlify.app/"} text={'Lorem ipsum dolor sit amet consectetur adipisipsa ea, aperiam ratione perferendis dolore sit temporibus'} tecnologias={['html', 'css']} />
      </div>
      <div className="proyects__item">
        <CardProyects imgProyect='\charla.PNG' title={'Wheather App'} urlGithubLink={"https://github.com/javierfern03/Weather-app"} urlPageLink={"https://weather-app-react-v1.netlify.app/"} text={'Lorem ipsum dolor sit amet consectetur adipisipsa ea, aperiam ratione perferendis dolore sit temporibus rerum '} tecnologias={['html', 'css']} />
      </div>
      <div className="proyects__item">
        <CardProyects imgProyect='\charla.PNG' title={'Tres en Raya'} urlGithubLink={"https://github.com/javierfern03/Tres-en-raya"} urlPageLink={"https://javier-tres-en-raya.netlify.app/"} text={'Lorem ipsum dolor sit amet consectetur adipisipsa ea, aperiam ratione perferendis dolore sit temporibus rerum'} tecnologias={['html', 'css']} />
      </div>
    </div>

  )
}

export default SliderComponent