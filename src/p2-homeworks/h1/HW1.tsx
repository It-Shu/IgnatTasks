import React from "react";
import {Message} from './Message';
import {AlternativeMessage} from './Message'
import './Message.module.css';
import s from "./Message.module.css";

export type MessageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}
export type AlternativeMessageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

let messageData: Array<MessageDataType> = [
    {
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
        name: "Artem",
        message: "npm start нажимал?",
        time: "22:00",
    }
];

let alternativeMessageData: Array<MessageDataType> = [
    {
        avatar: "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png",
        name: "Sergei",
        message: "а что это?!",
        time: "22:07",
    }
];


function HW1() {
    return (
        <div className={s.topBlock}>


            {/*should work (должно работать)*/}

            {messageData.map((message, index) => <Message key={index} {...message}/>)}


            {/*для личного творчества, могу проверить*/}
            {alternativeMessageData.map((m, index) => <AlternativeMessage key={index} {...m}/>)}

        </div>
    );
}

export default HW1;