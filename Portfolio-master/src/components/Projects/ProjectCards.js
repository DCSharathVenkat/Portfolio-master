import React from "react";
import { Card, Button } from "react-bootstrap";

function ProjectCard({ imgPath, title, description, ghLink, demoLink, downloadLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <div className="button-container">
          
          {demoLink && (
            <Button variant="secondary" href={demoLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "10px" }}>
              Demo
            </Button>
          )}
          {downloadLink && (
            <Button variant="success" href={downloadLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "10px" }}>
              Download Dashboard
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
