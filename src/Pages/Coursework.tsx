import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Coursework: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Relevent Coursework</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">Coming soon...</IonContent>
    </IonPage>
  );
};

export default Coursework;
