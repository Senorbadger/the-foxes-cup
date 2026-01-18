"use client";   
import races from "../../data/races.json";
import RaceResult from "./RaceResult";
interface iProps {
    raceNumber: number;
}
export default function RaceDetails(props: iProps) {
    const race = races.find(r => r.round === props.raceNumber);
    if (race === null || race === undefined) {
        return (
            <div className="alert alert-danger d-flex align-items-center" role="alert">
                <span className="fs-4 me-3">⭐</span>
                <div>
                    <strong>Round {props.raceNumber}</strong> has not yet been announced.
                </div>
            </div>
        ); 
    }
    const finalBanner = race.final === null ? (
        
        <div className="alert alert-warning d-flex align-items-center" role="alert">
            <span className="fs-4 me-3">⭐</span>
            <div>
                <strong>Final Race not yet scheduled!</strong>  
            </div>
        </div>
    ) : (
        <RaceResult points={true} showMedals id="race-final" isComplete={race.status === "complete"} riders={race.final.riders} track={race.finalTrack} />
    );
    return (
        <div>
            <div className="card"> 
                <div className="card-header">
                    <h5 className="card-title text-white text-uppercase text-center">Race 1</h5>
                </div>
                <div className="card-body">
                    <RaceResult points={false} id="race-1" isComplete={race.status === "complete"} riders={race.race1.riders} track={race.track} />
                </div>
            </div>
            <div className="card card-success mt-3"> 
                <div className="card-header">
                    <h5 className="card-title text-white text-uppercase text-center">Race 2</h5>
                </div>
                <div className="card-body">
                    <RaceResult points={false} id="race-2" isComplete={race.status === "complete"} riders={race.race2.riders} track={race.track} />
                </div>
            </div>
            <div className="card card-success mt-3"> 
                <div className="card-header">
                    <h5 className="card-title text-white text-uppercase text-center">Final Race</h5>
                </div>
                <div className="card-body">
                    {finalBanner}
                </div>
            </div>
        </div>
    );
}