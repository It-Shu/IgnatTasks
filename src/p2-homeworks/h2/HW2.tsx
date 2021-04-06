import React, {useState} from "react";
import Affairs from "./Affairs";
import s from './Affairs.module.css';


// types
export type AffairPriorityType = 'middle' | 'high' | 'low';// need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: string
};

export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "Work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
    {_id: 6, name: "google", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: string): Array<AffairType> => { // need to fix any
    if (filter === "all") return affairs;
    else return affairs.filter(i => i.priority === filter); // need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter((i) => i._id !== _id); // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); // need to fix any

    return (
        <div className={s.name}>
            <hr/>


            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    );
}

export default HW2;
