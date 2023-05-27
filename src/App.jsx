import "./App.css"
import JavaScriptSvg from "./icons/JavaScript"
import NodeSvg from "./icons/NodeJs"
import ReactSvg from "./icons/React"
import TailwindSvg from "./icons/Tailwind"
import CssSvg from "./icons/css"
import HtmlSvg from "./icons/Html"
import CardProyects from "./components/CardProyects"

function App() {


  return (
    <>
      <header className="header">
        <nav className="navbar">

          <div className="navbar__div">
            <span className="navbar__span">©</span>
            <span className="navbar__span">Code by Javier Fernandez</span>
          </div>

          <ul className="navbar__ul">
            <li className="navbar__li"><a href="">Home</a></li>
            <li className="navbar__li"><a href="">about me</a></li>
            <li className="navbar__li"><a href="">work</a></li>
            <li className="navbar__li"><a href="">contac</a></li>
          </ul>
        </nav>


        <img className="img__profile" src='/arunbeatnik_young_man_wearing_overshirt_or_shirt_jacket_with_ou_4f0bb6ba-f98d-4eeb-897e-6ddb9f1c8a18-removebg.png' alt="" />


        <h1>mi nombre es javier fernandez</h1>
        <span>desarrollador wed fullStack</span>

        <button>Work</button>

      </header >
      <main>

        <section className="section about">
          <div className="about__container">
            <h2 className="about__title">About Me</h2>
            <span className="about__span">saber mas</span>
            <p className="about__text">Hola soy Javier Fernandez y disfruto creando efectos de interfaz de usuario, animaciones y
              desarrollando experiencias de usuario intuitivas y dinámicas. Me gusta crear sitios web responsivos
              con diseño enfocado en móvil primero. Tengo experiencia con HTML, CSS, JavaScript, React, NodeJs, express y he construido diferentes proyectos con ello. Suelo ponerme retos diarios que me lleven a ser más
              eficiente como programador, logrando así identificar y resolver de mejor manera las necesidades
              que se me presenten.</p>

          </div>
        </section>

        <section className="section Skills">
          <div className="skills__container">
            <div className="skills__item">
              <HtmlSvg />
              <span>HTML</span>
            </div>
            <div className="skills__item">
              <CssSvg />
              <span>Css</span>
            </div>
            <div className="skills__item">
              <JavaScriptSvg />
              <span>JavaScript</span>
            </div>
            <div className="skills__item">
              <NodeSvg />
              <span>NodeJs</span>
            </div>
            <div className="skills__item">
              <ReactSvg />
              <span>React</span>
            </div>
            <div className="skills__item">
              <TailwindSvg />
              <span>TailwindCss</span>
            </div>
          </div>
        </section>

        <section>
          <h2>Word</h2>
          <span>los mejor de mi</span>

          <div>
            <CardProyects imgProyect='public\charla.PNG' title={'Pokedex'} text={'hola a toodos este es mi protexto espero que les guste me costo mucho hacerlo le dedique mucho tiempo y puese lo mejor de mi para hacerlo hacepto criticas constructvuvas'} />
          </div>
        </section>
        <section>
          <h2>contac</h2>
          <span>trabajemos jusnto</span>

          <div>
            <form action="">
              <label htmlFor="">nombre</label>
              <input type="text" />

              <label htmlFor="">apellido</label>
              <input type="text" />

              <label htmlFor="">correo</label>
              <input type="text" />
            </form>
          </div>
        </section>
        <footer>
          <div>
            <h4>version</h4>
            <p>ALL RIGHTS RESERVED © 2023 Edition</p>
          </div>
          <div>
            <h4>local time</h4>
            <p>11:09PM GMT+2</p>
          </div>
          <div>
            <h4>social</h4>
            <ul>
              <li>linkeding</li>
              <li>+58 0424 8450633</li>
              <li>jf2876430@gmail.com</li>
            </ul>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
