function College({ student, index }) {
    return (
        <>
            <h2>{index + 1} {student.name}</h2>
            <h3> {student.colleg}</h3>
            <h3> {student.branch}</h3>
            <h3> {student.admition}</h3>
            <h3> {student.passing}</h3>
            <h4>Subjects:</h4>
            <ul>
                {student.subjects.map((sub, i) => (
                    <li key={i}>{sub}</li>
                ))}
            </ul>
            <h4>Skills:</h4>
            <ul>
                {student.skills.map((skill, i) => (
                    <li key={i}>{skill.skillName} - {skill.level}</li>
                ))}
            </ul>
        </>
    )
};
export default College;