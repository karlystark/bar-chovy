"use client";

import { ChangeEvent, useState } from 'react';
import Image from "next/image";

const neededItems = ["wine", "cider", "baguette", "fruit", "tinned fish"];


export default function RSVP() {

    const [name, setName] = useState('');
    const [friendName, setFriendName] = useState('');
    const [item, setItem] = useState('');
    const [showFriendInput, setShowFriendInput] = useState(false);

    // Handle input changes
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handleFriendNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setFriendName(e.target.value);
    const handleItemChange = (e: React.ChangeEvent<HTMLSelectElement>) => setItem(e.target.value);

    // Toggle friend input visibility
    const toggleFriendInput = () => setShowFriendInput(!showFriendInput);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = { name, friendName, item };
        console.log(formData);
        // Implement submission logic (e.g., sending data to a server)
    };

    return (
        <div className="RSVP rounded-xl my-12 mx-44 py-12">
            <form onSubmit={handleSubmit} className="space-y-4 p-12 rounded-xl">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0c1b38]">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-[#aa512b] focus:ring-[#aa512b] sm:text-sm"
                    />
                </div>
                <div>
                    <button type="button" onClick={toggleFriendInput} className="py-2 px-4 bg-[#0c1b38] text-white rounded hover:bg-[#0c1b38]">
                        Bringing a friend?
                    </button>
                </div>
                {showFriendInput && (
                    <div>
                        <label htmlFor="friendName" className="block text-sm font-medium text-[#0c1b38]">Friend's Name</label>
                        <input
                            type="text"
                            id="friendName"
                            value={friendName}
                            onChange={handleFriendNameChange}
                            className="mt-1 block w-full rounded-md border-[#0c1b38] shadow-lg focus:border-[#aa512b]0 focus:ring-[#aa512b] sm:text-sm"
                        />
                    </div>
                )}
                <div>
                    <label htmlFor="item" className="block text-sm font-medium text-[#0c1b38]">What will you bring?</label>
                    <select
                        id="item"
                        value={item}
                        onChange={handleItemChange}
                        className="mt-1 block w-full rounded-md border-[#0c1b38] shadow-lg mb-12 focus:border-[#aa512b] focus:ring-[#aa512b] sm:text-sm"
                    >

                        <option value="">Select an item</option>
                        {neededItems.map((item, idx) => <option key={idx} value={item}>{item}</option>)}
                    </select>
                </div>
                <button type="submit" className="py-2 px-4 bg-[#0c1b38] text-white rounded hover:bg-[#0c1b38]">
                    See you there!
                </button>
            </form>
            <Image src="/bar.png" alt="tinned fish" height="300" width="400" />
        </div>
    );
};


