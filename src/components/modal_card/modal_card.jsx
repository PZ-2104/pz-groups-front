import React, { useState, useEffect } from 'react';
import styles from './modal_card.module.css';

const ModalCard = ({ isOpen, onClose, student }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 500);
  };

  if (!isOpen && !isClosing) {
    return null;
  }

  return (
    <div className={`${styles.modal} ${isClosing ? styles.modalClosing : ''}`}>
      <div className={`${styles.modalContent} ${isClosing ? styles.modalContentClosing : ''}`}>
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
        <div className={styles.studentInfo}>
          <h2 className={styles.studentName}>
            {student.fullName.eng} <span className={styles.redDot}>.</span>
          </h2>
          <h3 className={styles.studentRole}>{student.role.eng}</h3>
          <p className={styles.studentDescription}>
            {student.description.eng}
          </p>
          {student.github && <a href={student.github} className={styles.githubLink}>in GitHub</a>}
        </div>
        <div className={styles.studentImageContainer}>
          <img className={styles.studentImage} src={student.image} alt={student.fullName.eng} />
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
