import { IonRow, IonCol, IonText } from "@ionic/react";

const Course = ({courseName, courseDescription}: {courseName: string, courseDescription: string}) => {
    return (
        <IonRow>
            <IonCol offset="1">
              <IonText className="content-text1">
                <strong>{courseName}: </strong>
                {courseDescription}
              </IonText>
            </IonCol>
          </IonRow>
    )
}

export default Course;

