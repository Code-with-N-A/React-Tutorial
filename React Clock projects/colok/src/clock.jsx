import React, { useEffect, useState } from "react";
import "./App.css";

const Clock = ({ color }) => {
    const [time, setTime] = useState("H:M:S");
    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000)
    }, [])
    return (
        <>
            <div className="colo" style={{ color: color, background: "black", padding: "10px", borderRadius: "10px" }}>
                <h1>{time}</h1>
            </div>
        </>
    )
};
export default Clock;