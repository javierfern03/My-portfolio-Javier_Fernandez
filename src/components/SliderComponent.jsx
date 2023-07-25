import CardProyects from "./CardProyects";

const SliderComponent = () => {
  return (
    <div className="proyects__container-card">
      <div className="proyects__item">
        <CardProyects
          imgProyect="/Car-Rental.png"
          title={"Car Rental"}
          urlGithubLink={"https://github.com/javierfern03/car-rental"}
          urlPageLink={"https://car-rental-javier.netlify.app/"}
          tecnologias={[
            "html",
            "css",
            "React",
            "JavaScript",
            "React-Router-Dom",
          ]}
        />
      </div>

      <div className="proyects__item">
        <CardProyects
          imgProyect="/Card-Memory-Game.png"
          title={"Card Memory Game"}
          urlGithubLink={"https://github.com/javierfern03/Card-Memory-Game"}
          urlPageLink={"https://card-memory-game-javier-fernandez.netlify.app/"}
          tecnologias={["html", "css", "javascript", "react"]}
        />
      </div>

      <div className="proyects__item">
        <CardProyects
          imgProyect="\poke api.webp"
          title={"Pokedex"}
          urlGithubLink={"https://github.com/javierfern03/poke-api"}
          urlPageLink={"https://poke-api-javier-fernandez.netlify.app/"}
          tecnologias={["html", "css", "javascript", "react"]}
        />
      </div>

      <div className="proyects__item">
        <CardProyects
          imgProyect="\CRUD.webp"
          title={"Crud Users"}
          urlGithubLink={"https://github.com/javierfern03/CRUD-user"}
          urlPageLink={"https://crud-user-example.netlify.app/"}
          tecnologias={["html", "css"]}
        />
      </div>

      <div className="proyects__item">
        <CardProyects
          imgProyect="\rick-and-morty.webp"
          title={"Rick And Morty"}
          urlGithubLink={"https://github.com/javierfern03/Rick-And-Morty-api"}
          urlPageLink={"https://react-api-rick-and-morty.netlify.app/"}
          tecnologias={["html", "css"]}
        />
      </div>

      <div className="proyects__item">
        <CardProyects
          imgProyect="\weather-app.webp"
          title={"Wheather App"}
          urlGithubLink={"https://github.com/javierfern03/Weather-app"}
          urlPageLink={"https://weather-app-react-v1.netlify.app/"}
          tecnologias={["html", "css"]}
        />
      </div>

      <div className="proyects__item">
        <CardProyects
          imgProyect="\tres-en-raya.png"
          title={"Tres en Raya"}
          urlGithubLink={"https://github.com/javierfern03/Tres-en-raya"}
          urlPageLink={"https://javier-tres-en-raya.netlify.app/"}
          tecnologias={["html", "css"]}
        />
      </div>
    </div>
  );
};

export default SliderComponent;
