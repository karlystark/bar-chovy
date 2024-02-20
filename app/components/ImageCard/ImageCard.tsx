import Image from "next/image";

interface ImageCardProps {
    data: {
        url: string,
        alt: string,
    }
}


export default function ImageCard({data}:ImageCardProps){
    const {url, alt} = data;

    return(
        <Image className="rounded-xl m-4" src={url} alt={alt} height="350" width="350"/>
    )

}