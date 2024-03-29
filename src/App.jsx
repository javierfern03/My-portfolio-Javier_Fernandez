import "./App.css";
import JavaScriptSvg from "./icons/JavaScript";
import NodeSvg from "./icons/NodeJs";
import ReactSvg from "./icons/React";
import TailwindSvg from "./icons/Tailwind";
import CssSvg from "./icons/css";
import HtmlSvg from "./icons/Html";
import SliderComponent from "./components/SliderComponent";
import Git from "./icons/Github";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef, useState } from "react";
import Loading from "./components/Loading";
import Linkedin from "./icons/Linkedin";

function App() {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const d = new Date();
  let hour = d.getHours();
  let minutes = d.getMinutes();

  setTimeout(() => {
    setIsLoading(false);
  }, 3355);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
        multiplier: 1,
        resetNativeScroll: true,
      }}
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
              <div className="navbar__div ">
                <span className="navbar__span">©</span>
                <span className="navbar__span font-bodani">
                  <a href=""></a> CODE BY JAVIER FERNANDEZ
                </span>
              </div>

              <ul className="navbar__ul">
                <li className="navbar__li">
                  <button className="btn btn-navbar ">
                    <a
                      href="#home"
                      data-scroll-to
                      className="hover-underline-animation"
                    >
                      Home{" "}
                    </a>
                  </button>
                </li>
                <li className="navbar__li">
                  <button className="btn btn-navbar">
                    <a
                      href="#about-me"
                      data-scroll-to
                      className="hover-underline-animation"
                    >
                      About Me{" "}
                    </a>
                  </button>
                </li>
                <li className="navbar__li">
                  <button className="btn btn-navbar ">
                    <a
                      href="#proyects"
                      data-scroll-to
                      className="hover-underline-animation"
                    >
                      Proyects
                    </a>
                  </button>
                </li>
                <li className="navbar__li">
                  <button className="btn btn-navbar ">
                    <a
                      href="#contact"
                      data-scroll-to
                      className="hover-underline-animation"
                    >
                      Contact
                    </a>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__content__container">
            <div className="header__content">
              <div className="header__content__text">
                <h1
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                  data-scroll-class="fadeInIn"
                  className="title fadeIn"
                >
                  FullStack web Developer
                </h1>
                <span
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                  data-scroll-class="fadeInIn"
                  className="title--span fadeIn"
                >
                  Hi, Javier Fernandez. A passionate Full Stack Developer based
                  in Anzuategui, Venenzuela. 📍
                </span>
                <div className="hero__logo">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/javierfern03"
                  >
                    <Git />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/javier-fern%C3%A1ndez-/"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>

              <div className="hero-image"></div>
            </div>
          </div>

          <a>
            <div id="mouse-scroll">
              <div className="mouse">
                <div className="mouse-in"></div>
              </div>
              <div>
                <span className="down-arrow-1"></span>
                <span className="down-arrow-2"></span>
                <span className="down-arrow-3"></span>
              </div>
            </div>
          </a>
        </header>

        <body data-scroll-section>
          <section className="section-black">
            <section id="about-me" className="section about">
              <div className="about__container">
                <h2
                  className="about__title fadeIn font-bodani"
                  id="about-me"
                  data-scroll-class="fadeInIn"
                  data-scroll
                  data-scroll-speed="0.5"
                  data-scroll-position="start"
                  data-scroll-direction="vertical"
                >
                  ABOUT ME
                </h2>

                <p
                  className="about__text fadeInLeft"
                  data-scroll
                  data-scroll-class="fadeInInLeft"
                >
                  Hello! I&apos;m Javier Fernandez, a passionate and creative
                  web developer with experience in HTML, CSS, JavaScript, and
                  frameworks like React. I focus on usability and user
                  experience. I have the ability to solve challenges and work in
                  a team. Additionally, I have experience in developing web
                  applications using Node.js and Express, allowing me to create
                  comprehensive and scalable solutions. If you&apos;re looking
                  for a committed and results-oriented web developer, feel free
                  to contact me!
                </p>
              </div>
            </section>

            {/*    Skills    */}
            {/* <div className="stripe"></div> */}

            <section id="skills" className="section Skills">
              <div className="skills__container">
                <div className="skills__item">
                  <HtmlSvg fill="red" className="skills__logo" />
                  <span>HTML</span>
                </div>
                <div className="skills__item">
                  <CssSvg fill="#337CC9" className="skills__logo" />
                  <span>CSS</span>
                </div>
                <div className="skills__item">
                  <JavaScriptSvg fill="red" className="skills__logo" />
                  <span>JavaScript</span>
                </div>
                <div className="skills__item">
                  <NodeSvg fill="red" className="skills__logo" />
                  <span>NodeJs</span>
                </div>
                <div className="skills__item">
                  <ReactSvg fill="red" className="skills__logo" />
                  <span>React</span>
                </div>
                <div className="skills__item">
                  <TailwindSvg fill="red" className="skills__logo" />
                  <span>TailwindCss</span>
                </div>
              </div>
              <div className="skills__container">
                <div className="skills__item">
                  <HtmlSvg fill="red" className="skills__logo" />
                  <span>HTML</span>
                </div>
                <div className="skills__item">
                  <CssSvg fill="#337CC9" className="skills__logo" />
                  <span>CSS</span>
                </div>
                <div className="skills__item">
                  <JavaScriptSvg fill="red" className="skills__logo" />
                  <span>JavaScript</span>
                </div>
                <div className="skills__item">
                  <NodeSvg fill="red" className="skills__logo" />
                  <span>NodeJs</span>
                </div>
                <div className="skills__item">
                  <ReactSvg fill="red" className="skills__logo" />
                  <span>React</span>
                </div>
                <div className="skills__item">
                  <TailwindSvg fill="red" className="skills__logo" />
                  <span>TailwindCss</span>
                </div>
              </div>
            </section>

            {/* <div className="stripe"></div> */}

            {/*  PROYECT   */}
            <section id="proyect " className="section proyects">
              <div className="proyects__header">
                <h2
                  className="proyects__title font-bodani fadeIn"
                  id="proyects"
                  data-scroll
                  data-scroll-class="fadeInIn"
                  data-scroll-speed="0.5"
                  data-scroll-direction="vertical"
                >
                  PROJECTS
                </h2>
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
                <div>
                  <h2
                    data-scroll-class="probando"
                    data-scroll
                    data-scroll-speed="0.5"
                    data-scroll-direction="vertical"
                    className="contact__title"
                  >
                    <span className="font-bodani">LET&apos;S</span>
                    <span
                      data-scroll
                      data-scroll-speed="0.5"
                      data-scroll-direction="horizontal"
                    >
                      WORK
                    </span>
                    <span>TOGETHER</span>
                  </h2>
                </div>

                <div className="contact__header__image-container" data-scroll>
                  <div
                    data-scroll
                    className="contact__header__image-container-img"
                  >
                    <img
                      data-scroll
                      data-scroll-speed="-2"
                      src="/home-office.jpg"
                      alt="Home office image"
                    />
                  </div>
                </div>
              </div>

              <div className="contact__form-container">
                <div>
                  <form
                    className="form"
                    action="https://formsubmit.co/jf2876430@gmail.com"
                    method="POST"
                    id="form"
                  >
                    <div className="form__col">
                      <label className="label" htmlFor="name">
                        WHAT&lsquo;S YOUR NAME?
                      </label>
                      <input
                        className="field"
                        type="text"
                        id="form-name"
                        name="name"
                        required
                        placeholder="John Doe *"
                      />
                      <h5 className="serif">01</h5>
                    </div>
                    <div className="form__col">
                      <label className="label" htmlFor="email">
                        WHAT&lsquo;S YOUR EMAIL?
                      </label>
                      <input
                        className="field"
                        type="email"
                        id="form-email"
                        name="email"
                        required
                        placeholder="john@doe.com *"
                      />
                      <h5 className="serif">02</h5>
                    </div>
                    <div className="form__col">
                      <label className="label" htmlFor="service">
                        WHAT SERVICES ARE YOU LOOKING FOR?
                      </label>
                      <input
                        className="field"
                        type="text"
                        id="form-service"
                        name="service"
                        required
                        placeholder="Web Development ..."
                      />
                      <h5 className="serif">03</h5>
                    </div>
                    <div className="form__col">
                      <label className="label" htmlFor="message">
                        YOUR MESSAGE
                      </label>
                      <textarea
                        className="field"
                        name="message"
                        id="form-message"
                        rows="4"
                        placeholder="Hey there, can you help me with ... *"
                      ></textarea>
                      <h5 className="serif">04</h5>
                    </div>
                    <div>
                      <div>
                        <button
                          className="btn btn-form"
                          type="submit"
                          name="submit"
                          form="form"
                          value="submit"
                        >
                          <span className="hover-underline-animation">
                            SEND MESSAGE
                          </span>
                        </button>
                      </div>
                    </div>
                    <input
                      type="hidden"
                      name="_next"
                      value="https://javier-fernandez-portfolio-wed.netlify.app/"
                    />
                    <input type="hidden" name="_captcha" value="false"></input>
                  </form>
                </div>

                <div className="contact__details ">
                  <div>
                    <h4>Contact Details</h4>
                    <ul>
                      <li>
                        <span className="hover-underline-animation-footer">
                          <a
                            style={{ color: "black" }}
                            href="mailto:jf2876430@gmail.com?Subject=let's%20schedule%20a%20a%20live%20chat"
                          >
                            jf2876430@gmail.com
                          </a>
                        </span>
                      </li>
                      <li>+ 58 4248450633</li>
                      <li>Location: Venezuela</li>
                    </ul>
                  </div>
                  <div className="hero__logo">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/javierfern03"
                    >
                      <Git />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/javier-fern%C3%A1ndez-/"
                    >
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </body>

        <footer data-scroll-section className="footer">
          <div className="footer__container">
            <h3 className="foooter__contact">SEND US AN EMAIL</h3>
            <button
              className="btn2 btn-footer"
              href="mailto:jf2876430@gmail.com"
            >
              <span className="font-bodani footer__email hover-underline-animation-footer">
                <a href="mailto:jf2876430@gmail.com?Subject=let's%20schedule%20a%20a%20live%20chat">
                  jf2876430@gmail.com
                </a>
              </span>
            </button>

            <div className="stripe"></div>

            <div className="footer__footer">
              <div>
                <h4>local time</h4>
                <p style={{ fontWeight: 400 }} className="font-bodani">
                  {hour}:{minutes} P.M. GMT-4
                </p>
              </div>

              <div className="footer__version">
                <h4>version</h4>
                <p style={{ fontWeight: 400 }} className="font-bodani">
                  ALL RIGHTS RESERVED © 2023 Edition
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
