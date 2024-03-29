"use client";

import { ChangeEvent, useState } from 'react';
import Image from "next/image";

let neededItems = ["wine", "cider", "baguette", "fruit", "tinned fish"];
const date = "02/02/24";


export default function RSVP() {

    const [name, setName] = useState('');
    const [friendName, setFriendName] = useState('');
    const [item, setItem] = useState('');
    const [showFriendInput, setShowFriendInput] = useState(false);
    const [showSubmitMessage, setShowSubmitMessage] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    // Handle input changes
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handleFriendNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setFriendName(e.target.value);
    const handleItemChange = (e: React.ChangeEvent<HTMLSelectElement>) => setItem(e.target.value);

    // Toggle friend input visibility
    const toggleFriendInput = () => setShowFriendInput(!showFriendInput);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = { name, friendName, item, date};
        console.log(formData);
        setSubmitMessage(name ? `See you on ${date}, ${name}!` : '');
        setShowSubmitMessage(true);
        setName("");
        setFriendName("");
        setItem("");
        updateNeededItems(item);
        // implement graphQL db to hold rsvps
    };

    function updateNeededItems(item: string) {
        if(neededItems.length > 1){
        neededItems = neededItems.filter((neededItem) => neededItem !== item);
        } else {
        neededItems = ["a drink to share"];
        }
    }

    return (
        <>
        <div className="RSVP rounded-xl my-12 mx-10 bg-cover bg-top flex items-center">
            <div className="w-3/5 justify-center items-center flex">
            { showSubmitMessage &&
            <p className="text-[0c1b39] text-center text-m mt-8 -mb-10 mx-10 bg-[#f6eee0] rounded-xl p-10">{submitMessage}</p>
            }
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 p-12 rounded-r-xl w-2/5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-[#aa512b] text-[#0c1b38] focus:ring-[#aa512b] sm:text-sm"
                    />
                </div>
                <br></br>
                <div>

                    <input type="checkbox" id="friend" className="py-2 px-4 bg-[#0c1b38] hover:bg-[#38432f] h-6 w-6" onClick={() => toggleFriendInput()}>
                    </input>
                    <label htmlFor="friend" className="ml-3">I'm bringing a friend!</label>
                </div>
                <br></br>
                {showFriendInput && (
                    <div>
                        <label htmlFor="friendName" className="block text-sm font-medium">Friend's Name</label>
                        <input
                            type="text"
                            id="friendName"
                            value={friendName}
                            onChange={handleFriendNameChange}
                            className="mt-1 block w-full rounded-md border-[#0c1b38] text-[#0c1b38] shadow-lg focus:border-[#aa512b]0 focus:ring-[#aa512b] sm:text-sm"
                        />
                    </div>
                )}
                <div>
                    <label htmlFor="item" className="block text-sm font-medium">What will you bring?</label>
                    <select
                        id="item"
                        value={item}
                        onChange={handleItemChange}
                        className="mt-1 block w-full rounded-md border-[#0c1b38] shadow-lg mb-12 text-[#0c1b39] focus:border-[#aa512b] focus:ring-[#aa512b] sm:text-sm"
                    >

                        <option value="">Select an item</option>
                        {neededItems.map((item, idx) => <option key={idx} value={item}>{item}</option>)}
                    </select>
                </div>
                <button type="submit" className="py-3 px-4 bg-[#5d7633]  text-[#fffeff] float-right rounded">
                    See you there!
                </button>
            </form>
        </div >
            </>
    );
};


