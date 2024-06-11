import React, { useState, useEffect } from "react";
import style from "./OurTeam.module.css";
import StudentCard from "/src/components/student_card/student_card";
import ModalCard from "/src/components/modal_card/modal_card";
import CardTitle from "/src/components/card_title/card_title.jsx";

const OurTeam = () => {
    const [students, setStudents] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://pz-group-back.onrender.com/api/student/");
      const data = await response.json();
      if (response.ok) {
        setStudents(data.data);
      } else {
        console.error("Error fetching students:", data.error);
      }
    } catch (error) {
      console.error("Error fetching students", error);
    }
  };

    useEffect(() => {
        fetchData();
    }, []);

    const handleCardClick = async (studentId) => {
        try {
            const response = await fetch(`https://pz-group-back.onrender.com/api/student/${studentId}`);
            const data = await response.json();
            if (response.ok) {
                setSelectedStudent(data.data);
                setIsModalOpen(true);
            } else {
                console.error("Error fetching student details:", data.error);
            }
        } catch (error) {
            console.error("Error fetching student details", error);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedStudent(null);
    };

    const filterStudentsByRole = (role) => {
        if (!Array.isArray(students) || students.length === 0) {
            console.log("Students not found");
            return [];
        }
        return students.filter((student) => student.role.eng.includes(role));
    };

    return (
        <section id={style.our_team}>
            <h2 className={style.section_title}>
                Our <span className={style.red_word}>team</span>{" "}
            </h2>

            <CardTitle role="Front-end & Back-end" red_word="Developers" />
            <div className={style.cards_container}>
                {students.length ? (
                    filterStudentsByRole("Front-End Developer").map((student) => (
                        <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)} />
                    ))
                ) : (
                    <p>Students not found</p>
                )}
            </div>

            <CardTitle role="Full Stack" red_word="Developers" />
            <div className={style.cards_container}>
                {students.length ? (
                    filterStudentsByRole("Full Stack Developer").map((student) => (
                        <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)} />
                    ))
                ) : (
                    <p>Students not found</p>
                )}
            </div>

            <CardTitle role="iOS" red_word="Developers" />
            <div className={style.cards_container}>
                {students.length ? (
                    filterStudentsByRole("iOS Developer").map((student) => (
                        <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)} />
                    ))
                ) : (
                    <p>Students not found</p>
                )}
            </div>

            <CardTitle role="Software" red_word="Developers" />
            <div className={style.cards_container}>
                {students.length ? (
                    filterStudentsByRole("Software").map((student) => (
                        <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)} />
                    ))
                ) : (
                    <p>Students not found</p>
                )}
            </div>

            <CardTitle role="Python" red_word="Developers" />
            <div className={style.cards_container}>
                {students.length ? (
                    filterStudentsByRole("Python Developer").map((student) => (
                        <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)} />
                    ))
                ) : (
                    <p>Students not found</p>
                )}
            </div>

            <CardTitle role="Graphic & Web" red_word="Designers" />
            <div className={style.cards_container}>
                {students.length ? (
                    filterStudentsByRole("Graphic Designer").map((student) => (
                        <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)} />
                    ))
                ) : (
                    <p>Students not found</p>
                )}
                {students.length ? (
                    filterStudentsByRole("Web Designer").map((student) => (
                        <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)} />
                    ))
                ) : (
                    <p>Students not found</p>
                )}
            </div>

            <CardTitle role="System" red_word="Administrator" />
            <div className={style.cards_container}>
                {students.length ? (
                    filterStudentsByRole("System Administrator").map((student) => (
                        <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)} />
                    ))
                ) : (
                    <p>Students not found</p>
                )}
            </div>

            <CardTitle role="Sales" red_word="Managers" />
            <div className={style.cards_container}>
                {students.length ? (
                    filterStudentsByRole("Manager").map((student) => (
                        <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)} />
                    ))
                ) : (
                    <p>Students not found</p>
                )}
            </div>

            <CardTitle role="Team" red_word="Leads" />
            <div className={style.cards_container}>
                {students.length ? (
                    filterStudentsByRole("Team Lead").map((student) => (
                        <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)} />
                    ))
                ) : (
                    <p>Students not found</p>
                )}
            </div>

            <ModalCard isOpen={isModalOpen} onClose={handleCloseModal} student={selectedStudent} />
        </section>
    );
};

export default OurTeam;
