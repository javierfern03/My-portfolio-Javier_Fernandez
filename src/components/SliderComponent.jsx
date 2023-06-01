// import React from 'react'
import CardProyects from "./CardProyects"
// import Slider from "react-slick"

const SliderComponent = () => {


  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //     // You can unslick at a given breakpoint now by adding:
  //     // settings: "unslick"
  //     // instead of a settings object
  //   ]
  // };

  return (
    // <Slider {...settings}>
    <div className="slider">
      <div className="proyects__item">
        <CardProyects imgProyect='\charla.PNG' title={'Pokedex'} text={'hola a toodos este es mi protexto espero que les guste me costo mucho hacerlo le dedique mucho tiempo'} tecnologias={['html', 'css', 'javascript', 'react']} />
      </div>

      <div className="proyects__item">
        <CardProyects imgProyect='\charla.PNG' title={'Rick and Morty API'} text={'hola a toodos este es mi protexto espero que les guste me costo mucho hacerlo le dedique mucho tiempo'} tecnologias={['html', 'css']} />
      </div>

      <div className="proyects__item">
        <CardProyects imgProyect='\charla.PNG' title={'CRUD'} text={'hola a toodos este es mi protexto espero que les guste me costo mucho hacerlo le dedique mucho tiempo'} tecnologias={['html', 'css']} />
      </div>



    </div>
    // </Slider>
  )
}

export default SliderComponent