"use client"; 
import { useState } from "react";
import RaceDetails from "../../../components/content/RaceDetails"; 
export default function Home() {
  var races:number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
  const [race, setRace] = useState<number>(1);
  return (
    <div>
      <main className="container mx-auto">
          <div className="row my-3">
            {races.map((raceNumber:number) => {
              return <div onClick={() => setRace(raceNumber)} key={`race-${raceNumber}`} className="col-1 border text-center py-2 rounded">{raceNumber}</div>;
            })}
          </div>
          <RaceDetails raceNumber={race} />
      </main>
    </div>
  );
}
