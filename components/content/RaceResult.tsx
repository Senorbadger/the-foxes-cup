"use client";
import riders from "../../data/riders.json";
import points from "../../data/points.json"; 
import Medals from "./Medals";
interface iProps { 
    track: string; 
    riders: string[];
    points: boolean;
    isComplete: boolean;
    showMedals?: boolean;
    id: string;
};
export default function RaceResult(props: iProps) {
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
    const standings = props.isComplete && props.showMedals ? <Medals riders={props.riders} /> : null;
    const renderPosition = (position: number) => {
        switch (position) {
            case 1: return "1st";
            case 2: return "2nd";
            case 3: return "3rd";
            default: return `${position}th`;
        }
    };
    return (
        <div key={props.id} className="">
           {standings}
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th colSpan={props.points ? 4 : 3} className="text-center text-sm border-b">{props.track}</th>
                    </tr>
                    <tr>
                        <th className="text-left">Position</th>
                        <th className="text-left">Rider</th>
                        <th className="text-right">Result</th>
                        {props.points && <th className="text-right">Points</th>}
                    </tr>
                </thead>
                <tbody>
                    {props.riders.map((rider, index) => (
                        <tr key={rider} className="border-t text-sm">
                            <td className="text-left w-20 p-1">{index + 1}</td>
                            <td className="text-left p-1">{rider}</td>
                            <td className="text-right p-1">{props.isComplete ? renderPosition(index+1) : "?"}</td>
                            {props.points && <td className="text-right p-1">{points[index]}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    );
}