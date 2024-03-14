"use client";
import Image from "next/image";

export default function About() {

    return (
        <div className="About mx-auto pt-10 p-20">
            <div className="flex flex-col">
                <div className="text-3xl text-center my-10 text-[#0c1b38]">a consistent, monthly dinner party for friends (+ friends of friends).</div>
                <div className="flex">
                <div className="image-container overflow-hidden rounded-xl">
                    <Image src="/346.jpg" className="image-expand" alt="duplex and red truck with ivy" height="700" width="800"/>
                </div>
                <div className="bg-[#fcf1e9] shadow-lg p-8 m-6 rounded-xl relative">
                    <div className="flex flex-col">
                    <h3 className="mb-3">how it works:</h3>
                    <ul>
                        <li> - let me cook for you </li>
                        <li> - bring a friend (or not!) </li>
                        <li> - choose an item to bring (from rsvp)</li>
                        <li> - indulge me as I am really extra with this</li>
                        <li> - meet people and get warm</li>
                    </ul>
                    </div>
                    <Image src="/olives.png" alt="olives icon" height="200" width="200" className=" absolute top-0 right-0 z-50"/>
                    </div>
                </div>
                <div className=" p-8 leading-normal">
                    <p className="text-lg">This is a standing dinner + folks can come as they please. It is also especially for those who have expressed desire to build more regular community connection into their schedules.</p>
                </div>
            </div>
        </div>
    );
}