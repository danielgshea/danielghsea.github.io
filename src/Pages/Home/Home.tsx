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
import Navbar from "../../Components/Navbar";
import { arrowDown } from "ionicons/icons";
import TextCollage from "../../Components/TextCollage";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="home-content">
        <IonGrid className="home-grid">
          <IonRow className="header-row">
            <IonCol className="header-col">
              <div className="home-card pictitle">
                <div className="header-text-container">
                  <IonText className="header-text1">Daniel G. Shea</IonText>
                  <IonText className="content-text1 typewriter">
                    <Typewriter
                      words={["Student", "Software Engineer", "Researcher"]}
                      cursor
                      loop
                      cursorBlinking
                    />
                  </IonText>
                </div>
              </div>
            </IonCol>
          </IonRow>
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
