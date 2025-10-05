import "./App.css";
import College from "./college.jsx";
function App() {
  const collegeData = [
  {
    name: "Nitesh Amule",
    colleg: "SATI College, Vidisha",
    branch: "CSE",
    admition: "2024-25",
    passing: "2027",
    subjects: ["C Programming", "DBMS", "OS"],  // nested array
    skills: [
      { skillName: "JavaScript", level: "Intermediate" },
      { skillName: "React", level: "Beginner" }
    ] // nested objects in array
  },
  {
    name: "Aman Pande",
    colleg: "RGPV Polytechnic, Bhopal",
    branch: "IT",
    admition: "2023-24",
    passing: "2026",
    subjects: ["Networking", "Python", "Maths"],
    skills: [
      { skillName: "Python", level: "Advanced" },
      { skillName: "SQL", level: "Intermediate" }
    ]
  },
  {
    name: "Subha Roy",
    colleg: "JEC, Jabalpur",
    branch: "ECE",
    admition: "2022-23",
    passing: "2025",
    subjects: ["Electronics", "Digital Circuits", "Signals"],
    skills: [
      { skillName: "C++", level: "Intermediate" },
      { skillName: "MATLAB", level: "Beginner" }
    ]
  },
  {
    name: "Priya Sharma",
    colleg: "LNCT, Bhopal",
    branch: "CSE-AI",
    admition: "2024-25",
    passing: "2028",
    subjects: ["AI", "ML", "Data Science"],
    skills: [
      { skillName: "Python", level: "Advanced" },
      { skillName: "Machine Learning", level: "Intermediate" }
    ]
  }
];


  return (
    <>
      <h1 style={{padding:"10px",background:"yellow",color:"black"}}>Nested Loop</h1>
      {
        collegeData.map((student, index) => (
          <div key={index} className="student-card" style={{border: "1px solid #ccc", padding: "10px", margin: "10px", textAlign:"left"}}>
          <College student={student} index={index} />
          </div>

        ))
      }

    </>
  )
};
export default App;