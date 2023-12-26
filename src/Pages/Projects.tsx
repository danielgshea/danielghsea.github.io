import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import React from "react";
import HomeButton from "../Components/HomeButton";
import "./Projects.css";
import { cog } from "ionicons/icons";

const Projects: React.FC = () => {
  return (
    <IonPage className="projects-background">
      <IonContent className="aboutme-content">
        <IonGrid className="aboutme-grid">
          <IonRow className="aboutme-row">
            <IonCol className="center-col">
              <HomeButton />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Projects;
