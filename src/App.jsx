import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/student_card/student_card.jsx";

function App() {
	const [students, setStudents] = useState([]);

	useEffect(() => {
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

		fetchData();
	}, []);

	const filterStudentsByRole = (role) => {
		if (!Array.isArray(students) || students.length === 0) {
			console.log("No students found");
			return [];
		}
		return students.filter((student) => student.role.eng === role);
	};

	return (
		<>
			<section id="our_team">
				<h2 className="section_title">
					Our <span className="red_word">team</span>{" "}
				</h2>
				<p className="cards_title">
					Front-end and Back-end <span className="red_word">Developers</span>{" "}
				</p>
				<div className="cards_container">
					{students.length ? (
						filterStudentsByRole("Front-End Developer").map((student) => (
							<Card key={student._id} student={student} />
						))
					) : (
						<p>No students found</p>
					)}
				</div>
				<p className="cards_title">
					Full Stack <span className="red_word">Developers</span>{" "}
				</p>
				<div className="cards_container">
					{students.length ? (
						filterStudentsByRole("Full Stack Developer").map((student) => (
							<Card key={student._id} student={student} />
						))
					) : (
						<p>No students found</p>
					)}
				</div>
				<p className="cards_title">
					Software <span className="red_word">Developers</span>{" "}
				</p>
				<div className="cards_container">
					{students.length ? (
						filterStudentsByRole("Software Developer").map((student) => (
							<Card key={student._id} student={student} />
						))
					) : (
						<p>No students found</p>
					)}
				</div>
			</section>
		</>
	);
}

export default App;
