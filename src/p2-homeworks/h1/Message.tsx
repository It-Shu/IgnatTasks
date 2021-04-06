import React from "react";
import s from './Message.module.css'
import {MessageDataType, AlternativeMessageDataType} from "./HW1";

type PropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,

}

export function Message(props: PropsType) {
    return (


        <div className={s.Blocks}>

            <div className={s.avatarBlock}><img src={props.avatar} alt=""/></div>

            <div className={s.allBlock}>
                <div className={s.nameBlock}>{props.name}</div>
                <div className={s.messageBlock}>{props.message}</div>
                <div className={s.timeBlock}>{props.time}</div>
            </div>

        </div>
    );
}

export function AlternativeMessage(props: PropsType) {
    return (
        <div className={s.Blocks2}>
            <div className={s.avatarBlock2}><img src={props.avatar} alt=""/></div>
            <div className={s.allBlock2}>
                <div className={s.nameBlock2}>{props.name}</div>
                <div className={s.messageBlock2}>{props.message}</div>
                <div className={s.timeBlock2}>{props.time}</div>
            </div>
        </div>

    );
}