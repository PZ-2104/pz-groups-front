import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/student_card/student_card.jsx";
import CardTitle from "./components/card_title/card_title.jsx";

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
			console.log("Students not found");
			return [];
		}
		return students.filter((student) => student.role.eng.includes(role));
	};

	return (
		<>
			<section id="our_team">
				<h2 className="section_title">
					Our <span className="red_word">team</span>{" "}
				</h2>

				<CardTitle role="Front-end & Back-end" red_word="Developers" />
				<div className="cards_container">
					{students.length ? (
						filterStudentsByRole("Front-End Developer").map((student) => (
							<Card key={student._id} student={student} />
						))
					) : (
						<p>Students not found</p>
					)}
				</div>

				<CardTitle role="Full Stack" red_word="Developers" />
				<div className="cards_container">
					{students.length ? (
						filterStudentsByRole("Full Stack Developer").map((student) => (
							<Card key={student._id} student={student} />
						))
					) : (
						<p>Students not found</p>
					)}
				</div>

				<CardTitle role="iOS" red_word="Developers" />
				<div className="cards_container">
					{students.length ? (
						filterStudentsByRole("iOS Developer").map((student) => (
							<Card key={student._id} student={student} />
						))
					) : (
						<p>Students not found</p>
					)}
				</div>

				<CardTitle role="Software" red_word="Developers" />
				<div className="cards_container">
					{students.length ? (
						filterStudentsByRole("Software").map((student) => <Card key={student._id} student={student} />)
					) : (
						<p>Students not found</p>
					)}
				</div>

				<CardTitle role="Python" red_word="Developers" />
				<div className="cards_container">
					{students.length ? (
						filterStudentsByRole("Python Developer").map((student) => (
							<Card key={student._id} student={student} />
						))
					) : (
						<p>Students not found</p>
					)}
				</div>

				<CardTitle role="Graphic & Web" red_word="Designers" />
				<div className="cards_container">
					{students.length ? (
						filterStudentsByRole("Graphic Designer").map((student) => (
							<Card key={student._id} student={student} />
						))
					) : (
						<p>Students not found</p>
					)}
					{students.length ? (
						filterStudentsByRole("Web Designer").map((student) => (
							<Card key={student._id} student={student} />
						))
					) : (
						<p>Students not found</p>
					)}
				</div>

				<CardTitle role="System" red_word="Administrator" />
				<div className="cards_container">
					{students.length ? (
						filterStudentsByRole("System Administrator").map((student) => (
							<Card key={student._id} student={student} />
						))
					) : (
						<p>Students not found</p>
					)}
				</div>

				<CardTitle role="Sales" red_word="Managers" />
				<div className="cards_container">
					{students.length ? (
						filterStudentsByRole("Manager").map((student) => <Card key={student._id} student={student} />)
					) : (
						<p>Students not found</p>
					)}
				</div>

				<CardTitle role="Team" red_word="Leads" />
				<div className="cards_container">
					{students.length ? (
						filterStudentsByRole("Team Lead").map((student) => <Card key={student._id} student={student} />)
					) : (
						<p>Students not found</p>
					)}
				</div>
			</section>
		</>
	);
}

export default App;
