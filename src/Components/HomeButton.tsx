import { IonButton, IonIcon, IonText } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router-dom";
import { home, bonfire } from "ionicons/icons";
import "./HomeButton.css";

const HomeButton: React.FC = () => {
  const history = useHistory();
  const [iconColor, setIconColor] = React.useState("white");
  return (
    <IonButton
      className="homebutton"
      onMouseOver={() => setIconColor("black")}
      onMouseOut={() => setIconColor("white")}
      onClick={() => {
        history.push("/");
      }}
      shape="round"
    >
      <IonText className="content-text1-dark homebutton-text">Home</IonText>
    </IonButton>
  );
};

export default HomeButton;
