import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">D.C.Sharath Venkat. </span>           
            <br />
            I am currently pursuing my Masters in Computer Science at SUNY-Binghamton University.
            I am a passionate and enthusiastic individual with a strong desire to learn and grow.
            I am always eager to take on new challenges and explore new opportunities.
            <br />
            <br />

            🔹 Software Development: Skilled in C, Python, Java, JavaScript, Dotnet and SQL, with hands-on experience in full-stack development using Node.js, Express.js, Java Spring Boot, and more.
            <br />
            <br />
            🔹 UX/UI Design: Adept at designing intuitive and engaging digital experiences using Figma, Android Studio, and modern design principles.
            <br />
            <br />
            🔹 AI & Machine Learning: Experience in natural language processing (NLP) and predictive analytics, including an AI-powered educational chatbot that facilitates personalized learning.
            <br />
            <br />
            🔹 Cloud & DevOps: Familiar with Google Cloud, AWS, and serverless computing, ensuring efficient deployment and scalability.
            <br />
            <br />
            🔹 Web & Mobile Development: Built applications integrating RFID tracking, real-time data analysis, and API integrations, including a flight availability app using Skyscanner API.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🎮 Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> 🏏 Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> ✈️ Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> 🎨 Drawing
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
