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
import { cog, construct, school } from "ionicons/icons";
import { Link } from "react-router-dom";

const AboutMe: React.FC = () => {
  const goHome = () => {};
  return (
    <IonPage>
      <IonContent className="aboutme-grid">
        <IonGrid className="aboutme-grid">
          <IonRow>
            <IonCol>
              <IonButton onClick={goHome} shape="round">
                <Link to="/">
                  <IonText className="content1-text-dark">Home</IonText>
                </Link>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={cog} size="large" />
            </IonCol>
            <IonCol>
              <IonText className="content-text1">
                Current student, software engineer, and art lover, Daniel G.
                Shea currently attends North Carolina State University in
                Raleigh, N.C.
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={construct} size="large" />
            </IonCol>
            <IonCol>
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
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={school} size="large" />
            </IonCol>
            <IonCol>
              <IonText className="content-text1">
                At North Carolina State university he was introduced to a
                plethora of supportive menotrs, professors, and colleages.
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AboutMe;
