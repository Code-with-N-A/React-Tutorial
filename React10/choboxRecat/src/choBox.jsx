import { useState } from "react";
import "./App.css";

function Skills() {
    const [skills, setSkills] = useState([]);
    const hendelS = (e) => {
        if (e.target.checked) {
            setSkills([...skills, e.target.value])
        }
        else {
            setSkills([...skills.filter((item) => item != e.target.value)])

        }

    }
    return (
        <>
            <div className="comenor" style={{ textAlign: "left" }}>
                <h2>Select your Skils</h2>
                <label htmlFor="HTML">HTML:</label>
                <input onChange={hendelS} type="checkbox" name="HTML" value="HTML" id="HTML" /><br /><br />

                <label htmlFor="CSS">CSS:</label>
                <input onChange={hendelS} value="CSS" type="checkbox" name="CSS" id="CSS" /><br /><br />

                <label htmlFor="JAVASCRIPT">JavaScript:</label>
                <input onChange={hendelS} value="JAVASCRIPT" type="checkbox" name="JAVASCRIPT" id="JAVASCRIPT" />
            </div>
            <h2>{skills.toString()}</h2>
        </>
    )
};
export default Skills;