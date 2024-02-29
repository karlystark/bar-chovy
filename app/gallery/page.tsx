"use client";
import ImageCard from "../components/ImageCard/ImageCard";
import AlbumCard from "../components/AlbumCard/AlbumCard";
import React, { useState } from "react";

export default function Gallery() {

    interface Image {
        url: string,
        alt: string,
        date: string
    }

    interface AlbumGroups {
        [key: string]: Image[];
    }

    const images:Image[] = [
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
            date: "01/02/24"
        },
        {
            url: "/table.jpg",
            alt: "friends reach to grab food at a shared table",
            date: "01/02/24"
        },
        {
            url: "/tomatoes.jpg",
            alt: "a tray of tomatoes on toast",
            date: "01/02/24"
        },
    ];

    const [isAlbumOpen, setIsAlbumOpen] = useState<boolean>(false);
    const [selectedAlbum, setSelectedAlbum] = useState<string>("");

    function groupImagesByDate(images: Image[]):AlbumGroups {
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
            <div className="Gallery flex flex-wrap justify-center mt-10">
                {!isAlbumOpen ?
                    Object.entries(albums).map(([date, images], idx) => (
                            <AlbumCard data={{ date, images }} openAlbum={openAlbum} key={idx} />
                    )) :

                    albums[selectedAlbum]?.map((img, idx) => (
                        <ImageCard data={img} key={idx} />
                    ))
                }
            </div>
        </>
    );
}