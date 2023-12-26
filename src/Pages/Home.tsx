import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import React, { createRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { arrowDown } from "ionicons/icons";

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

  const contentRef = createRef<HTMLIonContentElement>();

  // this function comes from: https://ionicframework.com/docs/api/content#scroll-methods
  function scrollToBottom() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the bottom instead of instantly
    contentRef.current?.scrollToBottom(1000);
  }

  return (
    <IonPage>
      <IonContent ref={contentRef} className="home-content">
        <IonGrid className="home-grid">
          <IonRow className="grid1-row">
            <IonCol className="home-col">
              <IonGrid>
                <IonRow>
                  <IonCol className="home-col">
                    <IonText className="header-text1">Daniel G. Shea</IonText>
                  </IonCol>
                </IonRow>
                <IonCol className="home-col">
                  <IonText className="content-text1">
                    <Typewriter
                      words={["Computer Science Student", "Software Engineer"]}
                      cursor
                      loop={false}
                      cursorBlinking
                    />
                  </IonText>
                </IonCol>
                <IonRow className="arrow-row">
                  <IonCol className="home-col">
                    <IonButton
                      className="scroll-button"
                      onClick={scrollToBottom}
                      size="large"
                    >
                      <IonIcon icon={arrowDown} />
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="home-grid">
          <IonRow className="grid2-row">
            <IonCol className="grid2-col">
              <Link className="router-link" to="about#/">
                <div className="home-card pic1">
                  <IonText className="header-text2">About</IonText>
                </div>
              </Link>
            </IonCol>
          </IonRow>
          <IonRow className="grid2-row">
            <IonCol className="grid2-col">
              <Link className="router-link" to="projects#/">
                <div className="home-card pic2">
                  <IonText className="header-text2">Projects</IonText>
                </div>
              </Link>
            </IonCol>
          </IonRow>
          <IonRow className="grid2-row">
            <IonCol className="grid2-col">
              <Link className="router-link" to="coursework#/">
                <div className="home-card pic3">
                  <IonText className="header-text2">Coursework</IonText>
                </div>
              </Link>
            </IonCol>
          </IonRow>
          <IonRow className="grid2-row">
            <IonCol className="grid2-col">
              <Link className="router-link" to="contact#/">
                <div className="home-card pic4">
                  <IonText className="header-text2">Contact</IonText>
                </div>
              </Link>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
