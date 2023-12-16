import {
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonRouterLink,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";

const Home: React.FC = () => {
  const cards = document.getElementsByClassName("home-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  }, {});

  Array.from(cards).forEach((card) => {
    observer.observe(card);
  });

  return (
    <IonPage>
      <IonHeader className="home-header">
        <IonToolbar className="home-toolbar">
          <IonTitle>
            <IonText className="heading1">Home</IonText>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="home-content">
        <IonGrid className="home-grid">
          <IonRow className="home-row">
            <IonCol className="home-col ion-justify-content-center">
              <IonText className="header-text1">Daniel G. Shea</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="home-row">
            <IonCol className="home-col ion-justify-content-center">
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
              <IonCard className="home-card">
                <IonText className="header-text2">Card 1</IonText>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="home-row">
            <IonCol>
              <IonCard className="home-card">
                <IonText className="header-text2">Card 2</IonText>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="home-row">
            <IonCol>
              <IonCard className="home-card">
                <IonText className="header-text2">Card 3</IonText>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="home-row">
            <IonCol>
              <IonCard className="home-card">
                <IonText className="header-text2">Card 4</IonText>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
