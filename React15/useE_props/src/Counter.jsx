import { useEffect } from "react";

function Counter({ count, data }) {

    const getCounter = () => {
        console.log("+ data ");
    };

    useEffect(() => {
        getCounter();
    }, [count]);


    const mData = () => {
        console.log("- Data");
    };
    useEffect(() => {
        mData();
    }, [data]);
    return (
        <>
            <h3>Count (+): {count}</h3>
            <h3>Count (-): {data}</h3>
        </>
    )
};
export default Counter;