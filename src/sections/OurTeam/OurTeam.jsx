import React, { useState, useEffect } from "react";
import style from "./OurTeam.module.css";
import StudentCard from "/src/components/student_card/student_card";
import ModalCard from "/src/components/modal_card/modal_card";
import CardTitle from "/src/components/card_title/card_title.jsx";
import { useAtomValue} from "jotai";
import {localesAtom} from "../../store/locales.js";
import localesData from "../../../locales.json";
import {Circles} from "react-loader-spinner";

const OurTeam = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
  const locale = useAtomValue(localesAtom)
  const texts = localesData[locale];

  const fetchData = async () => {
    setIsLoading(true);

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
    } finally {
      setIsLoading(false);
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
              {texts.our1} <span className={style.red_word}>{texts.team}</span>{" "}
            </h2>

            <CardTitle role="Front-end & Back-end" red_word={texts.developers} />
          {
            isLoading ? <Circles
              height="40"
              width="40"
              color="#afafaf"
              visible={true}
            /> : <div className={style.cards_container}>
              {students.length ? (
                filterStudentsByRole("Front-End Developer").map((student) => (
                  <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)}/>
                ))
              ) : (
                <p>Students not found</p>
              )}
            </div>
          }

          <CardTitle role="Full Stack" red_word={texts.developers}/>
          {isLoading ? <Circles
            height="40"
            width="40"
            color="#afafaf"
            visible={true}
          /> : <div className={style.cards_container}>
            {students.length ? (
              filterStudentsByRole("Full Stack Developer").map((student) => (
                <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)}/>
              ))
            ) : (
              <p>Students not found</p>
            )}
          </div>}

          <CardTitle role="iOS" red_word={texts.developers}/>
          {isLoading ? <Circles
            height="40"
            width="40"
            color="#afafaf"
            visible={true}
          /> : <div className={style.cards_container}>
            {students.length ? (
              filterStudentsByRole("iOS Developer").map((student) => (
                <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)}/>
              ))
            ) : (
              <p>Students not found</p>
            )}
          </div>}

          <CardTitle role="Software" red_word={texts.developers}/>
          {isLoading ? <Circles
            height="40"
            width="40"
            color="#afafaf"
            visible={true}
          /> : <div className={style.cards_container}>
            {students.length ? (
              filterStudentsByRole("Software").map((student) => (
                <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)}/>
              ))
            ) : (
              <p>Students not found</p>
            )}
          </div>}

          <CardTitle role="Python" red_word={texts.developers}/>
          {isLoading ? <Circles
            height="40"
            width="40"
            color="#afafaf"
            visible={true}
          /> : <div className={style.cards_container}>
            {students.length ? (
              filterStudentsByRole("Python Developer").map((student) => (
                <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)}/>
              ))
            ) : (
              <p>Students not found</p>
            )}
          </div>}

          <CardTitle role={texts.graphAndWeb} red_word={texts.designers}/>
          {isLoading ? <Circles
            height="40"
            width="40"
            color="#afafaf"
            visible={true}
          /> : <div className={style.cards_container}>
            {students.length ? (
              filterStudentsByRole("Graphic Designer").map((student) => (
                <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)}/>
              ))
            ) : (
              <p>Students not found</p>
            )}
            {students.length ? (
              filterStudentsByRole("Web Designer").map((student) => (
                <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)}/>
              ))
            ) : (
              <p>Students not found</p>
            )}
          </div>}

          <CardTitle role={texts.system} red_word={texts.admin}/>
          {isLoading ? <Circles
            height="40"
            width="40"
            color="#afafaf"
            visible={true}
          /> : <div className={style.cards_container}>
            {students.length ? (
              filterStudentsByRole("System Administrator").map((student) => (
                <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)}/>
              ))
            ) : (
              <p>Students not found</p>
            )}
          </div>}

          <CardTitle role="Sales" red_word={texts.managers}/>
          {isLoading ? <Circles
            height="40"
            width="40"
            color="#afafaf"
            visible={true}
          /> : <div className={style.cards_container}>
            {students.length ? (
              filterStudentsByRole("Manager").map((student) => (
                <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)}/>
              ))
            ) : (
              <p>Students not found</p>
            )}
          </div>}

          <CardTitle role="Team" red_word="Leads"/>
          {isLoading ? <Circles
            height="40"
            width="40"
            color="#afafaf"
            visible={true}
          /> : <div className={style.cards_container}>
            {students.length ? (
              filterStudentsByRole("Team Lead").map((student) => (
                <StudentCard key={student._id} student={student} onClick={() => handleCardClick(student._id)}/>
              ))
            ) : (
              <p>Students not found</p>
            )}
          </div>}

          <ModalCard isOpen={isModalOpen} onClose={handleCloseModal} student={selectedStudent}/>
        </section>
    );
};

export default OurTeam;
