import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
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
            <h3 className="display-4 mb-4">Back-end Developer Assignment</h3>
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
                I'm attaining out to express my genuine pastime in joining your
                institution's backend developer course. With a solid heritage in
                frontend development, including one year of sensible experience
                with JavaScript and ReactJS, I'm eager to develop my skill set
                and explore the backend realm. <br /> My trip in frontend
                development has been rewarding, and I've witnessed firsthand the
                importance of straight forward interfaces and thoughtful design.
                However, I've realized the crucial position that backend
                development plays in developing robust and scalable
                applications. This realization has sparked my enthusiasm to
                transition into backend improvement and deepen my understanding
                of server-side technologies. <br /> What excites me most about
                your course is the hazard to delve into backend architecture,
                database management, and API development. I'm eager to learn
                server-side programming languages like Node.js and grasp
                frameworks such as Express.js and Django. <br /> Additionally,
                I'm drawn to the collaborative learning environment your group
                offers. Engaging with industry professionals and fellow
                learners, changing ideas, and solving real-world problems
                collectively is something I'm looking forward to. <br /> I'm
                confident that this course will no longer only enhance my
                technical abilities but also foster a attitude of continuous
                learning and innovation. <br /> Thank you for thinking about my
                application. I'm wholeheartedly committed to embarking on this
                journey closer to becoming a proficient backend developer, and I
                trust your course will provide the ideal platform for me to
                achieve my goals.
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
                I consider I possess the qualities and attributes that make for
                a strong and fine future developer. My passion for technology is
                no longer just limited to writing code; it extends to
                problem-solving, creativity, and non-stop learning. One of my
                strengths lies in my ability to adapt and thrive in dynamic
                environments. <br /> Throughout my journey as a frontend
                developer, I have encountered a number of challenges and
                complexities, each of which has been an opportunity for
                growth.Whether it is debugging a tricky issue or brainstorming
                modern solutions, I approach every challenge with a positive
                mindset and a willpower to succeed. <br /> Moreover, my
                experience in frontend development has instilled in me a eager
                eye for detail and a deep appreciation for consumer - centric
                design.I understand the importance of growing intuitive and
                responsive interfaces that enhance the overall person
                experience.This attention to detail, coupled with my proficiency
                in JavaScript, ReactJS, and NextJS, equips me with the abilities
                necessary to develop sturdy and user- friendly applications.{" "}
                <br /> Furthermore, I am a firm believer in the energy of
                collaboration and teamwork.I thrive in environments where
                diverse views are valued, and ideas are freely exchanged.I am
                always keen to contribute to group projects, leveraging my
                understanding while also getting to know from my peers. In
                essence, I am not just a developer; I am a trouble - solver, a
                creative thinker, and a lifelong learner.I am confident that my
                passion, adaptability, interest to detail, and collaborative
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
                It is with notable enthusiasm and eagerness that I write to you
                today to express my honest interest in the backend developer
                course presented by your esteemed institution. As someone deeply
                passionate about the subject of web development and dedicated to
                continuous learning and expert growth, I am eager to seize this
                chance to expand my skill set and embark on a new chapter in my
                profession journey. <br /> My journey into the world of
                programming commenced with a fervent curiosity for creating
                intuitive and visually charming user experiences. Over the past
                year, I have had the privilege of immersing myself in the realm
                of frontend development, delving into the intricacies of
                JavaScript, ReactJS, and NextJS. Through a mixture of
                self-directed study, practical projects, and real-world
                applications, I have developed a strong basis in frontend
                technologies, mastering the art of crafting responsive and
                user-centric net interfaces.
                <br /> However, I have come to recognize that true talent in web
                development necessitates a complete understanding of both
                frontend and backend technologies—a consciousness that has
                fueled my desire to delve deeper into the world of backend
                development. Among the myriad of backend technologies available,
                Node.js has captured my interest and ignited my curiosity. Its
                asynchronous, event-driven architecture, coupled with the
                familiarity of JavaScript, presents a compelling proposition for
                building scalable, efficient, and high-performance server-side
                applications. The prospect of harnessing the strength of Node.js
                to develop robust backend options that seamlessly integrate with
                frontend interfaces excites me beyond measure. I am mainly drawn
                to Node.js's ability to handle concurrent connections with ease,
                making it an perfect choice for building real-time functions and
                data-intensive platforms.
                <br />
                By mastering Node.js, I aim to now not only expand my technical
                repertoire however also unlock new avenues for innovation and
                creativity, enabling me to handle complex challenges with
                confidence and ingenuity. Beyond my technical pursuits, my
                various array of interests and hobbies has performed a pivotal
                role in shaping my character and strategy to learning. <br />{" "}
                Whether I'm soaring through the skies in heart-pounding
                paragliding adventures, pushing my bodily limits in grueling
                long-distance running events, immersing myself in the immersive
                worlds of video games, or delving into the rich tapestry of
                distinctive cultures, languages, and lifestyles, I am driven by
                an insatiable thirst for exploration and discovery. These
                interests have instilled in me a spirit of resilience,
                adaptability, and curiosity—qualities that I believe are
                indispensable for success in the dynamic and ever-evolving
                panorama of technology. In conclusion, I am confident that my
                blend of frontend experience, coupled with my ardour for
                continuous learning and exploration, positions me as a inspired
                and capable candidate for the backend developer course. I am
                fully dedicated to investing the time, effort, and dedication
                required to excel in this program, and I am eager to contribute
                positively to the mastering community through collaboration,
                innovation, and a relentless pursuit of excellence. <br /> Thank
                you for thinking about my application. I am genuinely excited
                about the prospect of joining your esteemed organization and
                embarking on a transformative learning journey that will no
                longer only enrich my professional skills but also allow me to
                make meaningful contributions to the field of internet
                development.
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
                me to craft compelling user experiences. <br /> Starting with
                the fundamentals, I've honed my skills in HTML5, mastering its
                semantic structure and markup capabilities to create
                well-organized and accessible web content. Complementing this,
                my proficiency in CSS3 allows me to style and design interfaces
                with precision, ensuring aesthetics meet functionality. Delving
                deeper into the realm of interactivity, I've embraced the power
                of JavaScript to bring web pages to life. <br /> From enhancing
                user interfaces with dynamic content to handling user
                interactions, my grasp of JavaScript empowers me to build
                engaging and interactive web experiences. My journey then led me
                into the realm of modern front-end frameworks, particularly
                ReactJS. Through extensive study and practical application, I've
                become proficient in React's core concepts, including
                component-based architecture, virtual DOM rendering, and the
                utilization of JSX for declarative UI development. Moreover, my
                understanding of React's ecosystem extends to advanced topics
                such as state management using hooks, efficient data propagation
                through props, and the implementation of context systems for
                managing global state. <br /> In essence, my journey through
                front-end development has been comprehensive and meticulous,
                equipping me with the skills and knowledge necessary to create
                impactful and scalable web applications in today's dynamic
                digital landscape.
              </p>
            </div>
          </Col>

          <Col lg="7">
            <div className="service_ py-4">
              <h5 className="service__title">
                A section where you link to a public repository on your GitHub
                that demonstrates your skills within HTML, CSS, and JavaScript.
                In this section you must also explain your code and how you
                created your project. (Maximum 500 words)
              </h5>
              <p>
                For every project, I embarked on a methodical approach, starting
                with thorough planning and conceptualization. Understanding the
                project necessities and objectives was paramount, as it
                furnished a clear roadmap for development. I carefully analyzed
                any provided specs or design mockups to ensure a complete
                understanding of the project scope and goals. Once the
                requirements were crystal clear, I proceeded to architect the
                project structure. Leveraging my grasp of folder structures and
                best practices, I geared up the project directory in a logical
                and scalable manner. With the groundwork laid, I delved into
                coding, adhering to enterprise best practices and coding
                standards for the duration of the process. Each line of code was
                meticulously crafted, with an emphasis on readability,
                efficiency, and maintainability. In HTML5, I utilized semantic
                markup to enhance accessibility and SEO-friendliness, whilst
                also ensuring cross-browser compatibility. CSS3 stylesheets have
                been written with a modular approach, making use of classes and
                cascading rules to create constant and visually appealing
                designs. Bootstrap was employed judiciously for fast prototyping
                and responsive layout design, with customizations made as
                necessary to align with undertaking requirements and branding
                guidelines. JavaScript formed the spine of interactivity within
                my projects. Leveraging the power of ES6 syntax, I employed
                current JavaScript features such as arrow functions, template
                literals, and destructuring assignments to write concise and
                expressive code. <br /> The introduction of ReactJS elevated the
                sophistication of my projects, enabling me to construct dynamic
                and interactive user interfaces with ease. I adopted a
                component-based architecture, breaking down the UI into reusable
                and composable components. Furthermore, I leveraged React Router
                for client-side routing, enabling smooth navigation between
                exclusive views or pages within the application. <br /> In more
                complicated projects, I implemented the context system for
                managing world state, facilitating data sharing across aspects
                without the need for prop drilling. This architectural choice
                ensured a scalable and maintainable codebase, even as the
                project grew in complexity. Overall, my approach to venture
                development was characterised by meticulous planning, diligent
                coding, and a commitment to turning in high-quality and
                performant solutions that met and passed the project
                requirements.
              </p>
              <br />

              <p>
               <b> GitHub repo's of this project :</b> {" "}
                <a href="https://github.com/Onksami/backend-assignment">
                https://github.com/Onksami/backend-assignment
                </a>{" "}
              </p>

              <p>
               <b> My GitHub : </b>{" "}
                {socialprofils.github && (
                  <a href={socialprofils.github}>
                    {" "}
                    <FaGithub />{" "}
                  </a>
                )}

                <a href="https://github.com/Onksami?tab=repositories">
                  https://github.com/Onksami?tab=repositories
                </a>{" "}
              </p>

              <p>
                <b>To reach this project in live server: </b>{" "}
                <a href="https://backend-assignment-jet.vercel.app/">
                  https://backend-assignment-jet.vercel.app/
                </a>{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
