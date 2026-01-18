"use client";
import riders from "../../data/riders.json"; 
interface iProps {  
    riders: string[]; 
};
export default function Medals(props: iProps) {
    var firstId = props.riders[0];
    var secondId = props.riders[1];
    var thirdId = props.riders[2];    
    var lastId = props.riders[props.riders.length - 1];
    var first = riders.find(r => r.id === firstId)!;
    var second = riders.find(r => r.id === secondId)!;
    var third = riders.find(r => r.id === thirdId)!;
    var last = riders.find(r => r.id === lastId)!;
    const driverResult = function(rider:any) {
        return (
            <div className="text-center">
                <div>{rider.name}</div> 
            </div>
        );
    }
     
    return ( 
            <div className="d-flex justify-content-between mb-3">
                <div className="font-bold border mr-1 px-2">
                    <img src="/gold.png" alt="Gold Medal" className="mx-auto mb-2" />
                    {driverResult(first)}
                </div>
                <div className="font-bold border mr-1 px-2">
                    <img src="/silver.png" alt="Silver Medal" className="mx-auto mb-2" />
                    {driverResult(second)}
                </div>
                <div className="font-bold border mr-1  px-2 mr-1">
                    <img src="/bronze.png" alt="Bronze Medal" className="mx-auto mb-2" />
                    {driverResult(third)}
                </div>
                <div className="font-bold border px-2 mr-1">
                    <img src="/last.png" alt="Last Medal" className="mx-auto mb-2" />
                    {driverResult(last)}
                </div>
            </div> 
    );
}