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

const AboutMe: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage className="background">
      <IonContent className="aboutme-content">
        <IonGrid className="aboutme-grid">
          <IonRow className="aboutme-row">
            <IonCol className="center-col">
              <IonButton
                onClick={() => {
                  history.push("/");
                }}
                shape="round"
              >
                <IonText className="content-text1-dark">Home</IonText>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol size="auto">
              <IonIcon icon={cog} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                Current student, software engineer, and art lover, Daniel G.
                Shea currently attends North Carolina State University in
                Raleigh, N.C.
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol size="auto">
              <IonIcon icon={construct} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                Starting off with Khan Academy coding projects in 2012, Daniel
                quickly grew fond of programming. He appreciated the dynamic
                problem solving and creative nature that is required to succeed
                in software development. Over the years he accrued skills in
                computer programming, learning HTML, CSS, JS, React, and
                Typescript. In 2022, he accepted an offer from NC State and
                committed to a degree in computer science.
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol size="auto">
              <IonIcon icon={school} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                At North Carolina State University he was introduced to a
                plethora of supportive mentors, professors, and colleages. In
                his classes, he became proficient in computer science and
                mathematical topics alike. As a second year computer science
                student, he's completed projects using Java and JUnit.
                Currently, he is working on developing independent projects as
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
                Daniel is currently seeking an opportunity to apply his skills
                in software engineering for summer 2024. While open to exploring
                a multitude of new topics, he has special interests in
                applications of machine learning in the financial and medicinal
                sectors.
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AboutMe;
