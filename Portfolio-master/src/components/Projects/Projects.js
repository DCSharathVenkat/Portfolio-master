import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import powerBI from "../../Assets/Projects/powerBI.png";


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
              imgPath={editor}
              isBlog={false}
              title="ShopSmart"
              description="Custom WordPress theme to streamline the grocery shopping experience, making it more intuitive and efficient for users. To enhance customer engagement, I integrated the WhatsApp Business API, allowing seamless communication, order tracking, and real-time updates. Additionally, I implemented referral and cashback plugins, encouraging user retention and incentivizing purchases through rewards, ultimately boosting customer loyalty and engagement. This solution not only optimized the shopping process but also created a more interactive and rewarding experience for users."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={powerBI}
              isBlog={false}
              title="HR Analytics Dashboard"
              description="This HR Analytics Dashboard provides key insights into employee attrition, workforce trends, and HR performance metrics. It helps HR teams and management track attrition rates, salary distribution, job roles, and employee tenure to make informed decisions. With interactive visualizations and data-driven insights, the dashboard identifies high-risk areas for attrition, enabling proactive strategies to improve employee engagement and retention. By leveraging Power BI's analytical capabilities, this tool supports better workforce planning, policy improvements, and overall organizational efficiency."
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
