function NewU({children, color="red"}){
    // defolt props ays pass karte hey
    return(
        <div style={{color:color, border:"2px solid red", marginTop:"20px"}}>
            {children}
        </div>
    )
}
export default NewU;