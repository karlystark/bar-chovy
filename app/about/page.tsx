"use client";
import Image from "next/image";

export default function About() {

    return (
        <div className="About mt-12">
            <button onClick={() => console.log("hit that button!")} className="z-50">click</button>
            <div className="mx-40 my-10 bg-[#fcf1e9] rounded-xl p-8">
            <p>A consistent, monthly (for now) dinner where friends (and friends of friends) can come together to share food, drinks, sweets, and warmth.</p><br></br>
            <p>This is a standing dinner + folks can come as they please. It is also especially for those who have expressed desire to build more regular community connection into their schedules.</p>
            </div>
            <div className="flex justify-around items-center">
            <Image src="/olives.png" alt="olives icon" height="400" width="400" />
            <div className="flex flex-col bg-[#fcf1e9] shadow-lg p-8 rounded-xl m-10">
                <h3 className="mb-3">how it works:</h3>
                <ul>
                    <li> - let me cook for you </li>
                    <li> - bring a friend (or not!) </li>
                    <li> - bring a bottle (or other drink)</li>
                    <li> - indulge me as I am really extra with this</li>
                    <li> - meet people and get warm</li>
                </ul>
            </div>
            </div>
        </div >
    );
}