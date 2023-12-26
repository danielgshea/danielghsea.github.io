import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import React from "react";
import HomeButton from "../Components/HomeButton";
import "./Coursework.css";

const Coursework: React.FC = () => {
  return (
    <IonPage className="coursework-background">
      <IonContent className="aboutme-content">
        <IonGrid className="aboutme-grid">
          <IonRow className="aboutme-row">
            <IonCol className="center-col">
              <HomeButton />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Coursework;
