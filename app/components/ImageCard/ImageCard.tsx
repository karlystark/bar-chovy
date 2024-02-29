import Image from "next/image";

interface ImageCardProps {
    data: {
        url: string,
        alt: string,
        date: string;
    }
}


export default function ImageCard({ data }: ImageCardProps) {
    const { url, alt } = data;

    return (
        <div className="m-4 gallery-image cursor-pointer relative">
            <Image className="rounded-xl" src={url} alt={alt} height="350" width="350" />
            <a href={url} download className="absolute p-2 m-2 rounded-xl decoration-none bg-[#fcf1e9] bottom-0 right-0">
                <img src="/download.png" alt="download button" className="h-5 w-5" />
            </a>
        </div>
    );

}