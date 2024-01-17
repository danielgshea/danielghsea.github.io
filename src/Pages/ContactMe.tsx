import {
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import React from "react";
import HomeButton from "../Components/HomeButton";
import "./ContactMe.css";
import { mail, logoLinkedin } from "ionicons/icons";

const ContactMe: React.FC = () => {
  return (
    <IonPage className="contactme-background">
      <IonContent className="contactme-content">
        <div className="contactme-header">
          <HomeButton />
        </div>
        <IonGrid className="contactme-grid">
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={mail} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Email: </strong>
                <a
                  className="link"
                  href="mailto:danielgshea@gmail.com?"
                  target="_blank"
                  rel="noreferrer"
                >
                  danielgshea@gmail.com
                </a>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={logoLinkedin} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <a
                  className="link"
                  href="https://www.linkedin.com/in/daniel-g-shea"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>Linkedin</strong>
                </a>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ContactMe;
