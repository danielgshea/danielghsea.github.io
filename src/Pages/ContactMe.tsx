import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const ContactMe: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact Me</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">Coming soon...</IonContent>
    </IonPage>
  );
};

export default ContactMe;
