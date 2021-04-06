import React from "react";
import {AffairType} from "./HW2";
import s from './Affairs.module.css';


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix

    return (
        <div>
            {props.affair.name}


            <button className={s.x_button} onClick={deleteCallback}><a className={s.x_button}>X</a></button>
            {props.affair.priority}
        </div>
    );
}

export default Affair;
