"use client";
import ImageCard from "../components/ImageCard/ImageCard";
import AlbumCard from "../components/AlbumCard/AlbumCard";
import React, { useState } from "react";
import Image from "next/image";

export default function Gallery() {

    interface Image {
        url: string,
        alt: string,
        date: string;
    }

    interface AlbumGroups {
        [key: string]: Image[];
    }

    const images: Image[] = [
        {
            url: "/backyard.jpg",
            alt: "friends hang out in the backyard sun",
            date: "01/02/24"
        },
        {
            url: "/beets.jpg",
            alt: "crackers with beets and cheese on a metal tray",
            date: "01/02/24"
        },
        {
            url: "/hug.jpg",
            alt: "four friends hug in a backyard",
            date: "02/02/24"
        },
        {
            url: "/table.jpg",
            alt: "friends reach to grab food at a shared table",
            date: "02/02/24"
        },
        {
            url: "/tomatoes.jpg",
            alt: "a tray of tomatoes on toast",
            date: "02/02/24"
        },
    ];

    const [isAlbumOpen, setIsAlbumOpen] = useState<boolean>(false);
    const [selectedAlbum, setSelectedAlbum] = useState<string>("");

    function groupImagesByDate(images: Image[]): AlbumGroups {
        return images.reduce<AlbumGroups>((groups, image) => {
            (groups[image.date] = groups[image.date] || []).push(image);
            return groups;
        }, {});
    }

    const albums = groupImagesByDate(images);

    function openAlbum(clickedImg: string) {
        console.log("GOT HERE!");
        setSelectedAlbum(clickedImg);
        setIsAlbumOpen(true);
    }

    return (
        <>
            {isAlbumOpen ?
            <>
                <button onClick={() => setIsAlbumOpen(false)} className="absolute z-10 rounded-xl self-start px-3 mx-10">
                    <Image src="/back.png" alt="back arrow" className="inline-block" width="60" height="60"/>
                </button>
                <p className="bg-[#5d7633] text-[#c7b29f] self-start py-2 px-3 mt-8 inline-block flex justify-center album-title">{selectedAlbum}</p>
                </>
                :
                <p className="bg-[#5d7633] text-[#c7b29f] self-start py-2 px-3 inline-block flex justify-center mt-8 album-title">albums</p>
            }

            <div className="Gallery flex flex-wrap justify-center mt-10 mb-10">
                {!isAlbumOpen ?
                    Object.entries(albums).map(([date, images], idx) => (
                        <AlbumCard data={{ date, images }} openAlbum={openAlbum} key={idx} />
                    ))
                    :
                    albums[selectedAlbum]?.map((img, idx) => (
                        <ImageCard data={img} key={idx} />
                    ))

                }
            </div>
        </>
    );
}