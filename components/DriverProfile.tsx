"use client";
interface iProps {
    name: string;
    avatarUrl: string; 
    teamName: string;
    index: number;
}
export default function DriverProfile(props: iProps) { 
    return (
        <div className=" col-6 col-lg-3 card-info" key={props.name}>
            <div className="card m-2"> 
            <img
                src={props.avatarUrl}
                alt={`${props.name}'s avatar`}
                className="rounded-full mx-auto mt-4 w-32 h-32"
            />
            <h2 className="text-xl text-center font-bold">{props.name}</h2> 
            <p className="text-gray-600 text-center italic text-sm">{props.teamName}</p>
        </div>
        </div>
    );
}