import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { Container, Row, Col } from "react-bootstrap";
import { meta  } from "../../content_option";
import { FaGithub } from "react-icons/fa";
import { socialprofils } from "../../content_option";



export const Questions = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h3 className="display-4 mb-4">
            Back-end Developer Assignment
            </h3>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>


        <Row className="sec_sp">
 
          <Col lg="7">
            <div className="service_ py-4">
              <h5 className="service__title">
                Why you want to study this course. (Maximum 250 words)
              </h5>
              <p className="service_desc">
                I am writing to express my genuine enthusiasm for pursuing the
                backend developer course at your esteemed institution. With a
                solid foundation in frontend development, including one year of
                hands-on experience working with JavaScript and ReactJS, I am
                eager to expand my skill set and delve deeper into the backend
                realm. My journey in frontend development has been both
                fulfilling and enlightening, allowing me to witness firsthand
                the impact of seamless user interfaces and intuitive design.
                However, I've come to realize the indispensable role of backend
                development in delivering robust, scalable, and efficient
                applications. This realization has fueled my desire to
                transition into backend development and acquire a comprehensive
                understanding of server-side technologies. What excites me most
                about this course is the opportunity to explore the intricacies
                of backend architecture, database management, and API
                development. I am eager to unravel the mysteries of server-side
                programming languages, such as Node.js, and gain proficiency in
                frameworks like Express.js and Django. Moreover, I am drawn to
                the collaborative learning environment your institution offers,
                where I can engage with industry professionals and fellow
                enthusiasts, exchanging insights and tackling real-world
                challenges. I am confident that this course will not only
                sharpen my technical skills but also cultivate a mindset of
                continuous learning and innovation. In conclusion, I am
                wholeheartedly committed to embarking on this journey towards
                becoming a proficient backend developer, and I am convinced that
                your course will provide the ideal platform for me to achieve my
                goals. Thank you for considering my application.
              </p>
            </div>
          </Col>

          <Col lg="7">
            <div className="service_ py-4">
              <h5 className="service__title">
                Why you think you would be a good future developer. (Maximum 250
                words)
              </h5>
              <p>
                I believe I possess the qualities and attributes that make for a
                strong and effective future developer. My passion for technology
                is not just limited to writing code; it extends to
                problem-solving, creativity, and continuous learning. One of my
                strengths lies in my ability to adapt and thrive in dynamic
                environments.Throughout my journey as a frontend developer, I
                have encountered various challenges and complexities, each of
                which has been an opportunity for growth.Whether it's debugging
                a tricky issue or brainstorming innovative solutions, I approach
                every task with a positive mindset and a determination to
                succeed. Moreover, my experience in frontend development has
                instilled in me a keen eye for detail and a deep appreciation
                for user - centric design.I understand the importance of
                creating intuitive and responsive interfaces that enhance the
                overall user experience.This attention to detail, coupled with
                my proficiency in JavaScript, ReactJS, and NextJS, equips me
                with the skills necessary to develop robust and user- friendly
                applications. Furthermore, I am a firm believer in the power of
                collaboration and teamwork.I thrive in environments where
                diverse perspectives are valued, and ideas are freely
                exchanged.I am always eager to contribute to group projects,
                leveraging my expertise while also learning from my peers. In
                essence, I am not just a developer; I am a problem - solver, a
                creative thinker, and a lifelong learner.I am confident that my
                passion, adaptability, attention to detail, and collaborative
                spirit make me a valuable asset to any development team.
              </p>
            </div>
          </Col>

          <Col lg="7">
            <div className="service_ py-4">
              <h5 className="service__title">
                A personal letter where you can introduce yourself to us.
                (Maximum 700 words)
              </h5>
              <p>
                It is with great enthusiasm and eagerness that I write to you
                today to express my sincere interest in the backend developer
                course offered by your esteemed institution. As someone deeply
                passionate about the field of web development and committed to
                continuous learning and professional growth, I am eager to seize
                this opportunity to expand my skill set and embark on a new
                chapter in my career journey. My journey into the world of
                programming commenced with a fervent curiosity for creating
                intuitive and visually captivating user experiences. Over the
                past year, I have had the privilege of immersing myself in the
                realm of frontend development, delving into the intricacies of
                JavaScript, ReactJS, and NextJS. Through a combination of
                self-directed study, practical projects, and real-world
                applications, I have developed a strong foundation in frontend
                technologies, mastering the art of crafting responsive and
                user-centric web interfaces. However, I have come to recognize
                that true proficiency in web development necessitates a
                comprehensive understanding of both frontend and backend
                technologies—a realization that has fueled my desire to delve
                deeper into the world of backend development. Among the myriad
                of backend technologies available, Node.js has captured my
                attention and ignited my curiosity. Its asynchronous,
                event-driven architecture, coupled with the familiarity of
                JavaScript, presents a compelling proposition for building
                scalable, efficient, and high-performance server-side
                applications. The prospect of harnessing the power of Node.js to
                develop robust backend solutions that seamlessly integrate with
                frontend interfaces excites me beyond measure. I am particularly
                drawn to Node.js's ability to handle concurrent connections with
                ease, making it an ideal choice for building real-time
                applications and data-intensive platforms. By mastering Node.js,
                I aim to not only expand my technical repertoire but also unlock
                new avenues for innovation and creativity, enabling me to tackle
                complex challenges with confidence and ingenuity. Beyond my
                technical pursuits, my diverse array of interests and hobbies
                has played a pivotal role in shaping my character and approach
                to learning. Whether I'm soaring through the skies in
                heart-pounding paragliding adventures, pushing my physical
                limits in grueling long-distance running events, immersing
                myself in the immersive worlds of video games, or delving into
                the rich tapestry of different cultures, languages, and
                lifestyles, I am driven by an insatiable thirst for exploration
                and discovery. These pursuits have instilled in me a spirit of
                resilience, adaptability, and curiosity—qualities that I believe
                are indispensable for success in the dynamic and ever-evolving
                landscape of technology. In conclusion, I am confident that my
                blend of frontend experience, coupled with my passion for
                continuous learning and exploration, positions me as a motivated
                and capable candidate for the backend developer course. I am
                fully committed to investing the time, effort, and dedication
                required to excel in this program, and I am eager to contribute
                positively to the learning community through collaboration,
                innovation, and a relentless pursuit of excellence. Thank you
                for considering my application. I am genuinely excited about the
                prospect of joining your esteemed institution and embarking on a
                transformative learning journey that will not only enrich my
                professional capabilities but also enable me to make meaningful
                contributions to the field of web development.
              </p>
            </div>
          </Col>

          <Col lg="7">
            <div className="service_ py-4">
              <h5 className="service__title">
                A short description of what course or previous experience you
                have within front-end development. (Maximum 250 words)
              </h5>
              <p>
                My journey into front-end development has been enriched by a
                comprehensive private course generously provided by my older
                brother, named Irfan Önk, a seasoned senior developer. This
                immersive learning experience has laid a solid foundation across
                a spectrum of essential technologies and frameworks, empowering
                me to craft compelling user experiences. Starting with the
                fundamentals, I've honed my skills in HTML5, mastering its
                semantic structure and markup capabilities to create
                well-organized and accessible web content. Complementing this,
                my proficiency in CSS3 allows me to style and design interfaces
                with precision, ensuring aesthetics meet functionality. Delving
                deeper into the realm of interactivity, I've embraced the power
                of JavaScript to bring web pages to life. From enhancing user
                interfaces with dynamic content to handling user interactions,
                my grasp of JavaScript empowers me to build engaging and
                interactive web experiences. My journey then led me into the
                realm of modern front-end frameworks, particularly ReactJS.
                Through extensive study and practical application, I've become
                proficient in React's core concepts, including component-based
                architecture, virtual DOM rendering, and the utilization of JSX
                for declarative UI development. Moreover, my understanding of
                React's ecosystem extends to advanced topics such as state
                management using hooks, efficient data propagation through
                props, and the implementation of context systems for managing
                global state. In essence, my journey through front-end
                development has been comprehensive and meticulous, equipping me
                with the skills and knowledge necessary to create impactful and
                scalable web applications in today's dynamic digital landscape.
              </p>
            </div>
          </Col>

          <Col lg="7">
            <div className="service_ py-4">
              <h5 className="service__title">
                A section where you link to a public repository on your
                GitHub that demonstrates your skills within HTML, CSS, and
                JavaScript. In this section you must also explain your code and
                how you created your project. (Maximum 500 words)
              </h5>
              <p>
                For each project, I embarked on a methodical approach, starting
                with thorough planning and conceptualization. Understanding the
                project requirements and objectives was paramount, as it
                provided a clear roadmap for development. I carefully analyzed
                any provided specifications or design mockups to ensure a
                comprehensive understanding of the project scope and goals. Once
                the requirements were crystal clear, I proceeded to architect
                the project structure. Leveraging my understanding of folder
                structures and best practices, I organized the project directory
                in a logical and scalable manner. With the groundwork laid, I
                delved into coding, adhering to industry best practices and
                coding standards throughout the process. Each line of code was
                meticulously crafted, with an emphasis on readability,
                efficiency, and maintainability. In HTML5, I utilized semantic
                markup to enhance accessibility and SEO-friendliness, while also
                ensuring cross-browser compatibility. CSS3 stylesheets were
                written with a modular approach, making use of classes and
                cascading rules to create consistent and visually appealing
                designs. Bootstrap was employed judiciously for rapid
                prototyping and responsive layout design, with customizations
                made as necessary to align with project requirements and
                branding guidelines. JavaScript formed the backbone of
                interactivity within my projects. Leveraging the power of ES6
                syntax, I employed modern JavaScript features such as arrow
                functions, template literals, and destructuring assignments to
                write concise and expressive code. The introduction of ReactJS
                elevated the sophistication of my projects, enabling me to build
                dynamic and interactive user interfaces with ease. I adopted a
                component-based architecture, breaking down the UI into reusable
                and composable components. Furthermore, I leveraged React Router
                for client-side routing, enabling smooth navigation between
                different views or pages within the application. In more complex
                projects, I implemented the context system for managing global
                state, facilitating data sharing across components without the
                need for prop drilling. This architectural decision ensured a
                scalable and maintainable codebase, even as the project grew in
                complexity. Overall, my approach to project development was
                characterized by meticulous planning, diligent coding, and a
                commitment to delivering high-quality and performant solutions
                that met and exceeded the project requirements.
              </p>
              <br /> 

              <p>My GitHub : {socialprofils.github && ( <a href={socialprofils.github}> <FaGithub /> </a> )}  
              <br /> 
              
              <a href="https://github.com/Onksami?tab=repositories">https://github.com/Onksami?tab=repositories</a> </p>
              <br /> 

              <p>To reach this project in live : <a href="vercel link here">vercel link here</a> </p>

              

            </div>
          </Col>


        </Row>
      </Container>
    </HelmetProvider>
  );
};
