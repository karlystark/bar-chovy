"use client";
import Image from "next/image";
import './MenuCard.css';
import React, { useState } from "react";

/** MenuCard renders a customizable card with a header image, custom alt-text,
 * menu item title, and menu item description.
 *
 * Props:
 *  => data: an object with images, alt text, and text data.
 *    ex. {
 *          images: ['main.jpg', ''],
 *          alt: ['a great dane', ''],
 *          text: ['header text', 'paragraph text'],
 *        }
 *
 * State: none
 */

interface MenuCardProps {
    data: {
        images: string[],
        alt: string[],
        text: string[],
    };
}

export default function MenuCard({ data }: MenuCardProps) {

    const { images, alt, text } = data;
    const [isHovered, setIsHovered] = useState(false);



    return (
        <div className="menuCard flex w-[400px] h-[400px] overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className={`rounded-xl overflow-hidden shadow-lg m-8 ${isHovered? 'bg-[#5d7633]' : 'bg-[#0c1b38]'}`}>
                {isHovered?
                 <div className="px-6 py-4 w-full h-full menu-details bg-[#fcf1e9] m-3">
                 <h2 className="text-3xl mt-4">{text[0]}</h2>
                 <p className="mt-6 text-lg font-serif">{text[1]} </p>
                 <p className="mt-4 text-lg font-serif"><b>allergies</b>: {text[2]}</p>
             </div> :
             <Image src={images[0]} className="w-full h-auto" alt={alt[0]} width="200" height="200" />
             }
            </div>
        </div>
    );
}