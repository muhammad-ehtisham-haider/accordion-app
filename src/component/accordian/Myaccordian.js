import React, { useState } from "react";
import "./accordian.css";

const Myaccordian = ({question, answer}) =>{
    const[show, setshow] = useState(false)
    return(
        
        <>
        
       <div className="main-heading pt-3 mt-3 ">
                <p className="circule border border-2 p-1 border-primary" onClick={()=>setshow(!show)}> {show? "➖" : "➕"} </p>
                <h5>{question} </h5>
       </div>
       {
        show && <p className="answers bg-white p-2">{answer}</p>
       }
        
        </>
    )
}

export default Myaccordian;