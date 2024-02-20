
import ImageCard from "../components/ImageCard/ImageCard";

export default function Gallery(){

    const images = [
        {
            url: "/backyard.jpg",
            alt: "friends hang out in the backyard sun"
        },
        {
            url: "/beets.jpg",
            alt: "crackers with beets and cheese on a metal tray"
        },
        {
            url: "/hug.jpg",
            alt: "four friends hug in a backyard"
        },
        {
            url: "/table.jpg",
            alt: "friends reach to grab food at a shared table"
        },
        {
            url: "/tomatoes.jpg",
            alt: "a tray of tomatoes on toast"
        },
    ]

    return (
        <div className="Gallery flex flex-wrap justify-center mt-10">
            {images.map((img, idx) => <ImageCard data={img} key={idx}/>)}
        </div>
    );
}