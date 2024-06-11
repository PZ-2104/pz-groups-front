import React from "react";
import styles from "./card_title.module.css";
const cards_title = ({ role, red_word }) => {
	return (
		<p className={styles.cards_title}>
			{role} <span className={styles.red_word}>{red_word}</span>{" "}
		</p>
	);
};
export default cards_title;
