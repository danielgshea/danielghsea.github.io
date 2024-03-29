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
                mathematical topics alike. As a second year computer science
                student, I have completed projects using Java and JUnit.
                Currently, I am working on developing independent projects as
                well as projects with the Innovative Educational Computing
                Laboratory.
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
                I have accepted a role with {" "}
                <a
                  className="link"
                  href="https://www.siemens.com/global/en/products/energy/energy-automation-and-smart-grid/world-of-energy-automation.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Siemens
                </a>{" "}
                as a project management intern for summer 2024. I will be
                working in their Electrification and Automation division
                learning from and contributing to the incredible team there.
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AboutMe;
