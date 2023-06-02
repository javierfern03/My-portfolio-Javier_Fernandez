import "./App.css"
import JavaScriptSvg from "./icons/JavaScript"
import NodeSvg from "./icons/NodeJs"
import ReactSvg from "./icons/React"
import TailwindSvg from "./icons/Tailwind"
import CssSvg from "./icons/css"
import HtmlSvg from "./icons/Html"
import Arrow from "./icons/Arrow"
import Hola from "./icons/Hola"
import SliderComponent from "./components/SliderComponent"

// import animateCss from "animate.css"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from "react"


function App() {
  const containerRef = useRef(null)

  return (

    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        {/* data-scroll-container  */}
        <header data-scroll-section data-scroll-speed="3" data-scroll-position="top" className="header">
          <nav className="navbar">

            <div className="navbar__div">
              <span className="navbar__span">©</span>
              <span className="navbar__span">Code by Javier Fernandez</span>
            </div>

            <ul className="navbar__ul">
              <li className="navbar__li"><a href="">HOME</a></li>
              <li className="navbar__li"><a href="#about-me">ABOUT ME</a></li>
              <li className="navbar__li"><a id="target" href="">PROYECTS</a></li>
              <li className="navbar__li"><a href="#contact">CONTACT</a></li>
            </ul>
          </nav>

          {/* <img className="img__profile" src='/arunbeatnik_young_man_wearing_overshirt_or_shirt_jacket_with_ou_4f0bb6ba-f98d-4eeb-897e-6ddb9f1c8a18-removebg.png' alt="" /> */}

          <div className="header__content">
            <h1 className="title animate__animated animate__fadeIn" data-scroll
              data-scroll-speed="2"
              data-scroll-position="top"
              data-scroll-direction="vertical">Javier Fernandez</h1>
            <span className="title--span animate__animated animate__fadeIn">Desarrollador wed FullStack</span>
            <div className="btn__header animate__animated animate__fadeIn"><a href="#contact">CONTACT</a></div>
          </div>

          <div className="container__located">
            <p className="header__soan-located"><span className="span__located">Located</span><span className="span__located">in the</span><span className="span__located">Venezuela</span></p>
            <Hola />
          </div>

        </header >
        <body data-scroll-section>

          <section className="section-black">

            <section id="about-me" className="section about">
              <div className="about__container">

                <h2 className="about__title animate__animated animate__fadeIn" data-scroll
                  data-scroll-speed="1"
                  data-scroll-position="start"
                  data-scroll-direction="horizontal">About Me</h2>

                <span className="about__span animate__animated animate__fadeIn">saber mas</span>
                <span className="about__span about__span--quot animate__animated animate__fadeIn">&lsquo;si puedes imaginarlo puedes programarlo 🕊️&lsquo;</span>

                <p className="about__text animate__animated animate__fadeIn">Hola soy Javier Fernandez y disfruto creando efectos de interfaz de usuario, animaciones y
                  desarrollando experiencias de usuario intuitivas y dinámicas. Me gusta crear sitios web responsivos
                  con diseño enfocado en móvil primero. Tengo experiencia con HTML, CSS, JavaScript, React, NodeJs, express y he construido diferentes proyectos con ello. Suelo ponerme retos diarios que me lleven a ser más
                  eficiente como programador, logrando así identificar y resolver de mejor manera las necesidades
                  que se me presenten.</p>

              </div>
            </section>

            {/*    Skills    */}
            <section id="skills" className="section Skills">
              <div className="skills__container">
                <div className="skills__item">
                  <HtmlSvg className='skills__logo' />
                  <span>HTML</span>
                </div>
                <div className="skills__item">
                  <CssSvg className='skills__logo' />
                  <span>Css</span>
                </div>
                <div className="skills__item">
                  <JavaScriptSvg className='skills__logo' />
                  <span>JavaScript</span>
                </div>
                <div className="skills__item">
                  <NodeSvg className='skills__logo' />
                  <span>NodeJs</span>
                </div>
                <div className="skills__item">
                  <ReactSvg className='skills__logo' />
                  <span>React</span>
                </div>
                <div className="skills__item">
                  <TailwindSvg className='skills__logo' />
                  <span>TailwindCss</span>
                </div>
              </div>
            </section>

            <div className="stripe"></div>

            {/*  PROYECT   */}

            <section id="proyects" className="section proyects">

              <div className="proyects__header">
                <h2 className="proyects__title">Proyect</h2>
                <span className="proyects__span">los mejor de mi</span>
              </div>

              <div className="proyects__container">
                <SliderComponent />
              </div>

            </section>

          </section>
          {/*   CONTACT  */}

          <section id="contact" className="section contact">
            <div className="contact__header">
              <h2 className="contact__title">LETS WORK TOGETHER</h2>

            </div>

            <div className="contact__form-container">
              <form className="form" action="">
                <div className="form__col">
                  <label className="label" htmlFor="name">WHAT&lsquo;S YOUR NAME?</label>
                  <input className="field" type="text" id="form-name" name="name" required placeholder="John Doe *" />
                  <h5 className="serif">01</h5>
                </div>
                <div className="form__col">
                  <label className="label" htmlFor="email">WHAT&lsquo;S YOUR EMAIL?</label>
                  <input className="field" type="text" id="form-email" name="email" required placeholder="john@doe.com" />
                  <h5 className="serif">02</h5>
                </div>
                <div className="form__col">
                  <label className="label" htmlFor="">WHAT SERVICES ARE YOU LOOKING FOR?</label>
                  <input className="field" type="text" id="form-email" name="email" required placeholder="john@doe.com" />
                  <h5 className="serif">03</h5>
                </div>
                <div className="form__col">
                  <label className="label" htmlFor="message">YOUR MESSAGE</label>
                  <textarea className="field" name="message" id="form-message" rows="4" placeholder="Hey there, can you help me with ... *"></textarea>
                  <h5 className="serif">04</h5>
                </div>

              </form>
            </div>
          </section>
        </body>

        <footer data-scroll-section className="footer">
          <div className="footer__container">
            {/* <div className="stripe"></div> */}

            <h3 className="foooter__contact">SEND US AN EMAIL</h3>

            <span className="footer__email">jf2876430@gmail.com</span>
            <div className="btn__fill"></div>
            {/* TODO: hacer el subrayado */}


            <div className="footer__arrow">
              <Arrow />
            </div>


            <div className="stripe"></div>

            <div className="footer__social">
              <ul className="footer__social__list">
                <h4>social</h4>
                <li>linkeding</li>
                <li>Javier Fernandez</li>
                <li>+58 04248450633</li>
              </ul>
            </div>

            <div className="footer__footer">
              <div>
                <h4>local time</h4>
                <p>11:09PM GMT+2</p>
              </div >

              <div className="footer__version">
                <h4>version</h4>
                <p>ALL RIGHTS RESERVED © 2023 Edition</p>
              </div>
            </div>
          </div>
        </footer>
      </main >
    </LocomotiveScrollProvider>

  )
}

export default App
