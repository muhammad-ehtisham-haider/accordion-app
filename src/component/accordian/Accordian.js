import React, { useState } from "react";
import { questions } from "../Api";
import "./accordian.css";
import Myaccordian from "./Myaccordian";

const Accordian = ()=>{
    const[data, setdata]= useState(questions);
    return(
        <>
            <section className="main-div m-auto mt-5 p-4">
                <h1 className="text-center text-capitalize">react interview questions</h1>
           
            {
                data.map((currentdata)=>{
                        const {id} = currentdata;
                        return <Myaccordian  key={id} {...currentdata} />;
                })
            }
            </section>
        </>
    )
}
export default Accordian;