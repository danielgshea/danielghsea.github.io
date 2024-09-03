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
import HomeButton from "../../Components/HomeButton";
import "./Coursework.css";
import Course from "./Course";
import { Link } from "react-router-dom";

const Coursework: React.FC = () => {
  return (
    <IonPage className="coursework-background">
      <IonContent className="coursework-content">
        <div className="coursework-header">
          <HomeButton />
        </div>
        <IonGrid className="coursework-grid">
          <a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=14000030" target="_blank" rel="noopener noreferrer">
            <Course
              courseName="Software Engineering"
              courseDescription="Introduction to software engineering, including concepts such as software development life cycle, requirements analysis, design, implementation, testing, and maintenance."
            />
          </a>
          <a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=8000026" target="_blank" rel="noopener noreferrer">
            <Course
              courseName="Operating Systems"
              courseDescription="Introduction to operating systems, including concepts such as process management, memory management, file systems, virtual memory, multithreading, and I/O systems."
            />
          </a>
          <a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=2000007" target="_blank" rel="noopener noreferrer">
            <Course
              courseName="Human Computer Interaction (HCI)"
              courseDescription="Study of the design of interactive computer systems."
            />
          </a>
          <a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=8500020" target="_blank" rel="noopener noreferrer">
            <Course
              courseName="Data Structures and Algorithms"
              courseDescription="Abstract data types; abstract and implementation-level views of data types. *"
            />
          </a>
          <a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=8000025" target="_blank" rel="noopener noreferrer">
            <Course
              courseName="Discrete Math for Computer Scientists"
              courseDescription="Propositional logic and predicate calculus. Logic gates and circuits. Methods of proof. Mathematical induction. Recursive definitions and functions. Solving recurrences. Asymptotic growth of functions. Elementary combinatorics and probability. Introduction to graph theory. Binary relations, including posets and equivalence relations. *"
            />
          </a>
          <a href="https://www.csc.ncsu.edu/courses/outcomes.php?uniq_id=19" target="_blank" rel="noopener noreferrer">
            <Course
              courseName="Automata, Grammars, and Computability"
              courseDescription="Study of three classical formal models of computation--finite state machines, context-free grammars, and Turing machines--and the corresponding families of formal languages. *"
            />
          </a>
          <Course
            courseName="Linear Algebra"
            courseDescription="Systems of linear equations. Matrices and determinants. Vector spaces. Linear transformations. Eigenvalues and eigenvectors. *"
          />
          <Course
            courseName="Software Development Fundamentals"
            courseDescription="In this course, students were taught the process for designing, implementing, and testing software."
          />
          <Course
            courseName="C and Software Tools"
            courseDescription="This course covers skills in important areas. Students learn C and apply those skills in a manner to use computer hardware more efficiently."
          />
          <Course
            courseName="Calculus I, II, III"
            courseDescription=""
          />
          <Course
            courseName="Physics for Engineers 1"
            courseDescription=""
          />
          <Course
            courseName="Computing Environments"
            courseDescription="Introduction to computing environments. Specific focus on terminal and unix commands"
          />
          <Course
            courseName="Principles of Microeconomics"
            courseDescription=""
          />
          <Course
            courseName="Introduction to Computing: Java"
            courseDescription=""
          />
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
