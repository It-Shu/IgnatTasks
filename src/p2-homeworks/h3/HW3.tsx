import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import s from "./Greeting.module.css";
import {v1} from "uuid";


// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {

    const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any


    const addUserCallback = (name: string) => { // need to fix any
        const newUsers = {_id: v1(), name: name}
        if (name) {
    setUsers([...users, newUsers])
        }
    }

    return (
        <div >
            <hr/>
            <div className={s.someClass}> <h3>homeworks 3</h3>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;