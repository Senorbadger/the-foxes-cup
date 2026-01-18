"use client";   
import riders from "../../data/riders.json";
import points from "../../data/points.json";
import races from "../../data/races.json";

import React from "react";
import Medals from "./Medals";
interface iDriverStanding {
    position: number;
    name: string;
    id: string;
    team: string;
    points: number;
    wins: number;
}

export default function Standings() {

var drivers:iDriverStanding[] = [];
riders.map((driver) => {
    var item = {
        id: driver.id,
        name: driver.name,
        team: driver.teamName,
        points: 0,
        wins: 0,
        position: 1
    };
    drivers.push(item);
});
const completedRaces = races.filter(x => x.status === "complete" && x.final !== null);
completedRaces.map((r) => {
    r.final!.riders.map((riderId, index) => {
        var driver = drivers.find(d => d.id === riderId);
        if (index === 0) {
            driver!.wins += 1;
        }
        var pointsEarned = points[index] || 0;
        driver!.points += pointsEarned;
    });
}); 
drivers.sort((a, b) => b.points - a.points);
drivers.map((driver, pos) => {  
    driver.position = pos + 1;
 });
 
    return (
        <>
<div className="my-3 text-center w-100"> 
            <div className="p-0 mx-auto text-center d-inline-block"> 
                <div className="mx-auto justify-content-around text-center d-flex m-3">
                    <div className="border mx-1">
                        <img src="/gold.png" alt="Gold Medal" className="mx-auto mb-2" />
                        <div className="font-bold">{drivers[0].name}</div>
                        <div className="text-xs">({drivers[0].points} pts)</div>
                    </div>
                    <div className="border mx-1">
                        <img src="/silver.png" alt="Silver Medal" className="mx-auto mb-2" />
                        <div className="font-bold">{drivers[1].name}</div>
                        <div className="text-xs">({drivers[1].points} pts)</div>
                    </div>
                    <div className="border mx-1">
                        <img src="/bronze.png" alt="Bronze Medal" className="mx-auto mb-2" />
                        <div className="font-bold">{drivers[2].name}</div>
                        <div className="text-xs">({drivers[2].points} pts)</div>
                    </div> 
                </div>
            </div>
        </div>
<div className="card w-100 my-3">
            <div className="card-header">
                <h2 className="mb-0 text-white text-uppercase">🏁 Current Standings</h2>
            </div>
            <div className="card-body p-0">
                <table className="table text-xs table-striped mb-0">
                    <thead>
                        <tr> 
                            <th>Rider</th>
                            <th>Team</th>
                            <th>PTs</th>
                            <th>Wins</th>
                        </tr>
                    </thead>
                    <tbody>
                        {drivers.map((driver) => {
                            return (
                                <tr className={`rider-position-${driver.position}`} key={driver.id}> 
                                    <td><strong>{driver.name}</strong></td>
                                    <td>{driver.team}</td>
                                    <td>{driver.points}</td>
                                    <td>{driver.wins}</td>
                                </tr>
                            );
                        })} 
                    </tbody>
                </table>
            </div>
        </div>
</>
    );
}