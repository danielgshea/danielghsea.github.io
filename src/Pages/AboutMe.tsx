import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./AboutMe.css";
import { cog, construct, school, barChart } from "ionicons/icons";
import Navbar from "../Components/Navbar";
import { useHistory } from "react-router-dom";
import HomeButton from "../Components/HomeButton";

const AboutMe: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage className="aboutme-background">
      <IonContent className="aboutme-content">
        <div className="aboutme-header">
          <HomeButton />
        </div>
        <IonGrid className="aboutme-grid">
          <IonRow className="aboutme-row">
            <IonCol size="auto">
              <IonIcon icon={cog} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                Current student, software engineer, and art lover, I currently
                attend North Carolina State University in Raleigh, N.C.
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol size="auto">
              <IonIcon icon={construct} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                Starting off with Khan Academy coding projects in 2012, I
                quickly grew fond of programming. I appreciated the dynamic
                problem solving and creative nature that is required to succeed
                in software development. Over the years I accrued skills in
                computer programming - learning HTML, CSS, JS, React, and
                Typescript. In 2022, I started my bachelors degree in Computer
                Science with NC State's College of Engineering.
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol size="auto">
              <IonIcon icon={school} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                At North Carolina State University I was introduced to a
                plethora of supportive mentors, professors, and colleagues. In
                my classes, I became proficient in computer science and
                mathematical topics alike. As a second year computer science
                student, I have completed projects using Java and JUnit.
                Currently, I am working on developing independent projects as
                well as projects with the Innovative Educational Computing
                Laboratory.
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol size="auto">
              <IonIcon icon={barChart} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                I am currently seeking an opportunity to apply my skills in
                software engineering for summer 2024.
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AboutMe;
