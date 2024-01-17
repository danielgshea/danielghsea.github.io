import {
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import React from "react";
import HomeButton from "../Components/HomeButton";
import "./Projects.css";
import {
  briefcase,
  calendar,
  map,
  phonePortrait,
  barChart,
  business,
} from "ionicons/icons";

const Projects: React.FC = () => {
  return (
    <IonPage className="projects-background">
      <IonContent className="projects-content">
        <div className="projects-header">
          <HomeButton />
        </div>
        <IonGrid className="projects-grid">
          <IonRow className="aboutme-row">
            <IonCol size="auto">
              <IonIcon icon={briefcase} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Pack Scheduler: </strong>
                <i>Java, JUNIT, Git</i>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol size="auto">
              <IonIcon icon={business} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Project Scrum Manager: </strong>
                <i>Java, JUNIT</i>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol size="auto">
              <IonIcon icon={map} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>HEAT Interactive Map: </strong>
                <i>Excel, Data analysis, React, Project Management</i>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol size="auto">
              <IonIcon icon={phonePortrait} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>MS Community: </strong>
                <i>
                  React, Ionic/Capacitor, web/mobile app development, Jira,
                  Docker, PostgreSQL
                </i>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol size="auto">
              <IonIcon icon={calendar} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Calendar Merge: </strong>
                <i>React, AWS, PostgreSQL, Algorithm Design</i>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol size="auto">
              <IonIcon icon={barChart} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Buy or Sell: </strong>
                <i>
                  Data Collection + Processing, Python - Pandas, Model Training
                  + Evaluation
                </i>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Projects;
