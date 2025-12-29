"use client";
import Image from "next/image";
import DriverProfile from "../../../components/DriverProfile";
import riderData from "../../../data/riders.json";
interface iRider {
  name: string;
  avatarUrl: string;
  teamName: string;
} 
export default function Home() {
  return ( 
    <div className="min-h-screen font-sans">
      <main className="container mx-auto">
          <div className="row">
            {riderData.map((rider:iRider, index: number) => <DriverProfile key={rider.name} index={index} {...rider} />)}
          </div>
      </main>
    </div>
  );
}
