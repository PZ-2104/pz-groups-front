import React from "react";
import styles from "./student_card.module.css";
const studentCard = ({ student }) => {
	return (
		<div className={styles.student_card} onClick={() => {}}>
			<img className={styles.student_card_image} src={student.image} alt="student_image" />
			<p className={styles.student_card_fullname}>{student.fullName.eng}</p>
			<p className={styles.student_card_group}>PZ-2104</p>
			<p className={styles.student_card_role}>{student.role.eng}</p>
		</div>
	);
};
export default studentCard;
