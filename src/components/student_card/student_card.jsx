import React from "react";
import styles from "./student_card.module.css";
import {localesAtom} from "../../store/locales.js";
import {useAtomValue} from "jotai";

const StudentCard = ({ student, onClick }) => {
  const locale = useAtomValue(localesAtom)

  return (
    <div className={styles.student_card} onClick={onClick}>
      <img className={styles.student_card_image} src={student.image} alt="student_image" />
      <p className={styles.student_card_fullname}>{locale === 'en'? student.fullName.eng : student.fullName.ukr}</p>
      <p className={styles.student_card_group}>{locale === 'en' ? 'PZ-2104' : 'ПЗ-2104'}</p>
      <p className={styles.student_card_role}>{locale === 'en' ? student.role.eng : student.role.ukr}</p>
    </div>
  );
};

export default StudentCard;
