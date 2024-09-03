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
import HomeButton from "../../Components/HomeButton";

const AboutMe: React.FC = () => {
  return (
    <IonPage className="aboutme-background">
      <IonContent className="aboutme-content">
        <div className="aboutme-header">
          <HomeButton />
        </div>
        <IonGrid className="aboutme-grid">
          <IonRow>
            <IonCol>
              <IonText className="header-text3">Bio</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol offset="1">
              <IonText className="content-text1">
                Current student, software engineer, and art lover, I currently
                attend North Carolina State University in Raleigh, North
                Carolina.
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText className="header-text3">Before University</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol offset="1">
              <IonText className="content-text1">
                It all began with Khan Academy coding projects in 2012. I
                quickly grew fond of programming. I appreciated the dynamic
                problem solving and creative nature that is required to succeed
                in software development. Over the years I acquired skills in
                computer programming - learning Java, C, HTML, CSS, Javascript,
                React, and Typescript. In 2022, I started my bachelors degree in
                Computer Science with NC State's College of Engineering.
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText className="header-text3">University</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol offset="1">
              <IonText className="content-text1">
                At North Carolina State University I was introduced to a
                plethora of supportive mentors, professors, and colleagues. In
                my classes, I became proficient in computer science and
                mathematical topics alike. I am now in my third year at NC State diving deep into classes like operating systems and software engineering.
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText className="header-text3">Currently</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="aboutme-row">
            <IonCol offset="1">
              <IonText className="content-text1">
                I am working at {" "}
                <a
                  className="link"
                  href="https://www.siemens.com/global/en/products/energy/energy-automation-and-smart-grid/world-of-energy-automation.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Siemens
                </a>{" "}
                as a systems engineering intern for the fall 2024 semester. I get to work with the engineering team to develop AI applications for internal processes.
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AboutMe;
