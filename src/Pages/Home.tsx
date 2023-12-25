import {
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const cards = document.getElementsByClassName("home-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  });

  Array.from(cards).forEach((card) => {
    observer.observe(card);
  });

  return (
    <IonPage>
      <IonContent className="home-content">
        <IonGrid className="home-grid">
          <IonRow className="home-row">
            <IonCol className="home-col">
              <IonText className="header-text1">Daniel G. Shea</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="home-row">
            <IonCol className="home-col">
              <IonText className="content-text1">
                <Typewriter
                  options={{
                    strings: ["Computer Science Student", "Software Engineer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="home-row">
            <IonCol>
              <IonCard className="home-card pic1">
                <Link className="router-link" to="aboutme#/">
                  <IonText className="header-text2">About Me</IonText>
                </Link>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="home-row">
            <IonCol>
              <IonCard className="home-card pic2">
                <Link className="router-link" to="projects#/">
                  <IonText className="header-text2">Projects</IonText>
                </Link>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="home-row">
            <IonCol>
              <IonCard className="home-card pic3">
                <Link className="router-link" to="coursework#/">
                  <IonText className="header-text2">Coursework</IonText>
                </Link>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="home-row">
            <IonCol>
              <IonCard className="home-card pic4">
                <Link className="router-link" to="contact#/">
                  <IonText className="header-text2">Contact</IonText>
                </Link>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
