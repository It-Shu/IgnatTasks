import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error; // need to fix with (?:)
    const displayNone = s.displayNone;

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={error ? inputClass : ""}/>
            <span className={s.error_title}>{error ? "Give Me Your Name" : ""}</span>
            <button onClick={addUser} className={error ? s.button_error : s.button}>add</button>
            <div>
                <span className={s.span}>Total added users {totalUsers}</span>
            </div>
        </div>
    );
}

export default Greeting;