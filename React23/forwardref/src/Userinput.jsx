// import { forwardRef } from "react";

// const UserInput = (pros,ref) => {
//     return(
//         <>
//         <input type="text" ref={ref}/><br />
//         </>
//     )

// };
// export default forwardRef(UserInput);


const UserInput = (props)=>{
    return(
        <>
        <input type="text" ref={props.ref}/>
        </>
    )
};
export default UserInput;