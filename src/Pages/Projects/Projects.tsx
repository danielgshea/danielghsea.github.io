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
import HomeButton from "../../Components/HomeButton";
import "./Projects.css";
import {
  briefcase,
  calendar,
  map,
  phonePortrait,
  barChart,
} from "ionicons/icons";

const Projects: React.FC = () => {
  return (
    <IonPage className="projects-background">
      <IonContent className="projects-content">
        <div className="projects-header">
          <HomeButton />
        </div>
        <IonGrid className="projects-grid">
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={briefcase} size="large" />
            </IonCol>
            <IonCol>
              <IonText className="header-text3">School</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Pack Scheduler: </strong>
                <i>Java, JUNIT, Git</i>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Project Scrum Manager: </strong>
                <i>Java, JUNIT</i>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={map} size="large" />
            </IonCol>
            <IonCol>
              <IonText className="header-text3">IEC Lab</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>HEAT Interactive Map: </strong>
                <i>Excel, Data analysis, React, Project Management</i>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Learning From Faliure: </strong>
                <i>
                  Excel, Data analysis, communication, literature review,
                  research, LLM fine tuning
                </i>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={barChart} size="large" />
            </IonCol>
            <IonCol>
              <IonText className="header-text3">Professional</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
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
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={calendar} size="large" />
            </IonCol>
            <IonCol>
              <IonText className="header-text3">Personal</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Calendar Merge: </strong>
                <i>React, AWS, PostgreSQL, Algorithm Design</i>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Projects;
