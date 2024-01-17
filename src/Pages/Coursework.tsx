import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
  IonIcon,
} from "@ionic/react";
import React from "react";
import HomeButton from "../Components/HomeButton";
import "./Coursework.css";
import { caretForward } from "ionicons/icons";

const Coursework: React.FC = () => {
  return (
    <IonPage className="coursework-background">
      <IonContent className="coursework-content">
        <div className="coursework-header">
          <HomeButton />
        </div>
        <IonGrid className="coursework-grid">
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={caretForward} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Discrete Math for Computer Scientists: </strong>
                Propositional logic and predicate calculus. Logic gates and
                circuits. Methods of proof. Mathematical induction. Recursive
                definitions and functions. Solving recurrences. Asymptotic
                growth of functions. Elementary combinatorics and probability.
                Introduction to graph theory. Binary relations, including posets
                and equivalence relations. *
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={caretForward} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Software Development Fundamentals: </strong>
                In this course, students were taught the process for designing,
                implementing, and testing softwarwe.
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={caretForward} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Automata, Grammars, and Computability: </strong>
                Study of three classical formal models of computation--finite
                state machines, context-free grammars, and Turing machines--and
                the corresponding families of formal languages. *
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={caretForward} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>C and Software Tools: </strong>
                This course covers skills in important areas. Students learn C
                and apply those skills in a manner to use computer hardware more
                efficiently.
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={caretForward} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Data Structures and Algorithms: </strong>
                Abstract data types; abstract and implementation-level views of
                data types. *
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={caretForward} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Calculus I, II, III</strong>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={caretForward} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Physics for Engineers 1</strong>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={caretForward} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Computing Environments: </strong>
                Introduction to computing environments. Specific focus on
                terminal and unix commands
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={caretForward} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Principles of Microeconomics</strong>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={caretForward} size="large" />
            </IonCol>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>Introduction to Computing: Java</strong>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonText className="content-text1">
              <i>
                * Description came from NC State Department of Computer Science
              </i>
            </IonText>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Coursework;
