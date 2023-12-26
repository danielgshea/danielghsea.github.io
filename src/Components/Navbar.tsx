import {
  IonButton,
  IonCol,
  IonGrid,
  IonLabel,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
} from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <IonRow>
        <IonCol size="12">
          <IonSegment scrollable>
            <IonSegmentButton
              onClick={() => history.push("/")}
              value="home"
              className="segment-button"
            >
              <IonLabel className="content-text2-dark label">Home</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton
              onClick={() => history.push("about#/")}
              value="about"
              className="segment-button"
            >
              <IonLabel className="content-text2-dark label">About</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton
              onClick={() => history.push("projects#/")}
              value="projects"
              className="segment-button"
            >
              <IonLabel className="content-text2-dark label">Projects</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton
              onClick={() => history.push("coursework#/")}
              value="coursework"
              className="segment-button"
            >
              <IonLabel className="content-text2-dark label">
                Coursework
              </IonLabel>
            </IonSegmentButton>
            <IonSegmentButton
              onClick={() => history.push("contact#/")}
              value="contact"
              className="segment-button"
            >
              <IonLabel className="content-text2-dark label">Contact</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonCol>
      </IonRow>
    </>
  );
};

export default Navbar;
