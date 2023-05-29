import "./App.css"
import JavaScriptSvg from "./icons/JavaScript"
import NodeSvg from "./icons/NodeJs"
import ReactSvg from "./icons/React"
import TailwindSvg from "./icons/Tailwind"
import CssSvg from "./icons/css"
import HtmlSvg from "./icons/Html"
import CardProyects from "./components/CardProyects"
import Arrow from "./icons/Arrow"
import Hola from "./icons/Hola"

function App() {


  return (
    <>
      <main>
        <header className="header">
          <nav className="navbar">

            <div className="navbar__div">
              <span className="navbar__span">©</span>
              <span className="navbar__span">Code by Javier Fernandez</span>
            </div>

            <ul className="navbar__ul">
              <li className="navbar__li"><a href="#home">Home</a></li>
              <li className="navbar__li"><a href="#about-me">about me</a></li>
              <li className="navbar__li"><a href="#proyects">Proyects</a></li>
              <li className="navbar__li"><a href="#contact">contact</a></li>
            </ul>
          </nav>

          {/* <img className="img__profile" src='/arunbeatnik_young_man_wearing_overshirt_or_shirt_jacket_with_ou_4f0bb6ba-f98d-4eeb-897e-6ddb9f1c8a18-removebg.png' alt="" /> */}

          <div className="header__content">
            <h1 className="title">Javier Fernandez</h1>
            <span className="title--span">Desarrollador wed fullStack</span>
            <div className="btn__header"><a href="#contact">CONTACT</a></div>
          </div>

          <Hola />

        </header >
        <body>


          <section id="about-me" className="section about">
            <div className="about__container">

              <h2 className="about__title">About Me</h2>

              <span className="about__span">saber mas</span>
              <span className="about__span about__span--quot">&lsquo;si puedes imaginarlo puedes programarlo 🕊️&lsquo;</span>

              <p className="about__text">Hola soy Javier Fernandez y disfruto creando efectos de interfaz de usuario, animaciones y
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

          </section>

          {/*   CONTACT  */}

          <section id="contact" className="section contact">
            <div className="contact__header">
              <h2 className="contact__title">LETS WORK TOGETHER</h2>
              {/* <span className="contact__span">LETS WORK TOGETHER</span> */}
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

        <footer className="footer">
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
            {/* <div className="btn__container">
              <a className="btn__footer" href="">
              <span className="btn__span">CONTACT</span>
              </a>
            </div> */}

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
      </main>
    </>
  )
}

export default App
