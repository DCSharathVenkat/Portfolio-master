import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="EDUBOT"
              description="I led the development of an AI-powered virtual assistant focused on delivering personalized learning experiences.
              By utilizing natural language processing (NLP) and machine learning, the assistant engages learners in real-time, answering queries, offering explanations, providing feedback, and facilitating interactive discussions."
              ghLink="https://github.com/DCSharathVenkat/AIEduBot"
   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Flight-aware VMware"
              description="This application is a flight search application where I used the Skyscanner API. It allows users to check real-time flight availability and compare ticket prices across multiple airlines. The application fetches flight details from Skyscanner’s API, including departure and arrival times, ticket prices, and airline options, ensuring accurate and up-to-date information. Additionally, I implemented features for filtering results based on budget, airline preferences, and layover durations. "

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sales Insight"
              description="This app is a serverless application designed to analyze diverse invoice datasets and train a machine learning model for sales forecasting. The core functionality of the app is to predict the type of card payment used by customers, enabling businesses to offer targeted promotions and personalized deals. By leveraging machine learning algorithms, the app identifies patterns in transactional data, allowing businesses to enhance customer engagement and retention."          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Seamless Entry and Exit Tracking for College Buses with RFID "
              description="This app is an IoT-based solution designed for real-time tracking of bus entries and exits using RFID technology. The system is equipped with RFID scanners installed on buses that automatically record bus' entry and exit times, along with the corresponding bus identification numbers. By leveraging real-time data processing, the app ensures accurate monitoring, enhancing security and providing with a reliable bus tracking system. This solution helps improve transportation management, streamline record-keeping, and offer real-time insights."

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
