import "./App.css"

import JavaScriptSvg from "./icons/JavaScript"
import NodeSvg from "./icons/NodeJs"
import ReactSvg from "./icons/React"
import TailwindSvg from "./icons/Tailwind"
import CssSvg from "./icons/css"
import HtmlSvg from "./icons/Html"
import Arrow from "./icons/Arrow"
import Hola from "./icons/Hola"
import Map from "./icons/Map"
import SliderComponent from "./components/SliderComponent"

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import {useRef, useState } from "react"
import Loading from "./components/Loading"


function App() {
  const containerRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
      setIsLoading(false)
  }, 3355);
  
  if(isLoading){
    return <Loading/>
  }

  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
          multiplier: 1.5,
          resetNativeScroll: true,
        }
      }
      watch={
        [
          // update()	
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <header data-scroll-section className="header">
          <div>
            <nav className="navbar">
              <div className="navbar__div font-bodani">
                <span className="navbar__span">©</span>
                <span className="navbar__span"><a href=""></a> CODE BY JAVIER FERNANDEZ</span>
              </div>

              <ul className="navbar__ul">
                <li className="navbar__li">
                  <button className="btn btn-navbar font-bodani">
                    <a href="#home" data-scroll-to className="hover-underline-animation" >HOME </a>
                  </button>
                </li>
                <li className="navbar__li">
                  <button className="btn btn-navbar font-bodani">
                    <a href="#about-me" data-scroll-to className="hover-underline-animation" >ABOUT ME </a>
                  </button>
                </li>
                <li className="navbar__li">
                  <button className="btn btn-navbar font-bodani">
                    <a href="#proyects" data-scroll-to className="hover-underline-animation" >PROJECTS</a>
                  </button>
                </li>
                <li className="navbar__li">
                  <button className="btn btn-navbar font-bodani">
                    <a href="#contact" data-scroll-to className="hover-underline-animation" >CONTACT</a>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header__content">
            <h1 data-scroll
              data-scroll-speed="1" data-scroll-direction="vertical" data-scroll-class="fadeInIn" className="title fadeIn">Javier Fernandez</h1>
            <span data-scroll
              data-scroll-speed="1" data-scroll-direction="vertical" data-scroll-class="fadeInIn" className="title--span fadeIn">Full Stack Web Developer</span>
            <div className="btn__header" >
              <button className="btn btn-home">
                <a href="#contact" data-scroll-to className="hover-underline-animation font-bodani " >CONNECT</a>
              </button>
            </div>
          </div>

          <div className="container__located">
            <p className="header__soan-located font-bodani">
              <span className="span__located">Located</span>
              <span className="span__located">in the</span>
              <span className="span__located">Venezuela</span>
            </p>
            <Hola />
            <div className="map">
              <Map />
            </div>
          </div>

        </header >

        <body data-scroll-section>
          <section className="section-black">
            <section id="about-me" className="section about">
              <div className="about__container">

                <h2 className="about__title fadeIn font-bodani" id="about-me" data-scroll-class="fadeInIn" data-scroll
                  data-scroll-speed="0.5"
                  data-scroll-position="start"
                  data-scroll-direction="vertical">ABOUT ME</h2>

                {/* <span className="about__span ">saber mas</span> */}
                {/* <span className="about__span about__span--quot ">&lsquo;si puedes imaginarlo puedes programarlo 🕊️&lsquo;</span> */}

                <p className="about__text fadeInLeft" data-scroll data-scroll-class="fadeInInLeft"  >Hi, I&apos;m Javier Fernandez and I enjoy creating user interface effects, animations and developing intuitive and dynamic user experiences. I like to build responsive websites with mobile-first design. I have experience with HTML, CSS, JavaScript, React, NodeJs, express and have built different projects with it. I usually set myself daily challenges that lead me to be more efficient as a programmer, thus being able to better identify and solve the needs that arise.</p>
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
                  <span>CSS</span>
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
            <section id="proyect " className="section proyects">
              <div className="proyects__header">
                <h2 className="proyects__title font-bodani fadeIn" id="proyects" data-scroll data-scroll-class="fadeInIn" data-scroll-speed="0.5"
                  data-scroll-direction="vertical">PROJECTS</h2>
              </div>

              <div className="proyects__container">
                <SliderComponent />
              </div>
            </section>

          </section>

          {/*   CONTACT  */}
          <section id="contact" className="section contact">
            <div className="container__contact">
              <div className="contact__header">
                <h2 data-scroll-class="probando" data-scroll
                  data-scroll-speed="0.5"
                  data-scroll-direction="vertical" className="contact__title">
                  <span className="font-bodani">LET&apos;S</span>
                  <span data-scroll
                    data-scroll-speed="0.5"
                    data-scroll-direction="horizontal">WORK</span>
                  <span>TOGETHER</span>
                </h2>
              </div>

              <div className="contact__form-container">
                <form className="form" action="https://formsubmit.co/jf2876430@gmail.com" method="POST" id="form">
                  <div className="form__col">
                    <label className="label" htmlFor="name">WHAT&lsquo;S YOUR NAME?</label>
                    <input className="field" type="text" id="form-name" name="name" required placeholder="John Doe *" />
                    <h5 className="serif">01</h5>
                  </div>
                  <div className="form__col">
                    <label className="label" htmlFor="email">WHAT&lsquo;S YOUR EMAIL?</label>
                    <input className="field" type="email" id="form-email" name="email" required placeholder="john@doe.com *" />
                    <h5 className="serif">02</h5>
                  </div>
                  <div className="form__col">
                    <label className="label" htmlFor="service">WHAT SERVICES ARE YOU LOOKING FOR?</label>
                    <input className="field" type="text" id="form-service" name="service" required placeholder="Web Development ..." />
                    <h5 className="serif">03</h5>
                  </div>
                  <div className="form__col">
                    <label className="label" htmlFor="message">YOUR MESSAGE</label>
                    <textarea className="field" name="message" id="form-message" rows="4" placeholder="Hey there, can you help me with ... *"></textarea>
                    <h5 className="serif">04</h5>
                  </div>
                  <div>
                    <div>
                      <button className="btn btn-form" type="submit" name="submit" form="form" value="submit">
                        <span className="hover-underline-animation" >SEND MESSAGE</span>
                      </button>
                    </div>
                  </div>
                  <input type="hidden" name="_next" value="https://javier-fernandez-portfolio-wed.netlify.app/" />
                  <input type="hidden" name="_captcha" value="false"></input>
                </form>
              </div>
            </div>

          </section>
        </body>

        <footer data-scroll-section className="footer">
          <div className="footer__container">

            <h3 className="foooter__contact">SEND US AN EMAIL</h3>
            <button className="btn2 btn-footer" href="mailto:jf2876430@gmail.com">
              <span className="font-bodani footer__email hover-underline-animation-footer" ><a href="mailto:jf2876430@gmail.com?Subject=let's%20schedule%20a%20a%20live%20chat">jf2876430@gmail.com</a> </span>
            </button>

            <div className="btn__fill"></div>

            <div className="footer__arrow">
              <Arrow />
            </div>

            <div className="stripe"></div>

            {/* <div className="footer__social">
              <ul className="footer__social__list">
                <h4>social</h4>
                <li>linkeding</li>
                <li>Javier Fernandez</li>
                <li>+58 04248450633</li>
              </ul>
            </div> */}

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
  )}


export default App
