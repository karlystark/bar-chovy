import Image from 'next/image';

interface Image {
    url: string,
    alt: string,
    date: string;
}

interface AlbumCardProps {
    data: {
        date: string;
        images: Image[];
    },
    openAlbum: (clickedImg: string) => void,
}

export default function AlbumCard({ data, openAlbum }: AlbumCardProps) {
    const { date, images } = data;

    return (
        <>
        <div className="AlbumCard m-4 gallery-image relative">
            <Image src={images[0].url} alt={images[0].alt} className="rounded-xl" width="600" height="600" />
            <p className="absolute p-2 m-2 rounded-xl decoration-none bg-[#fcf1e9] top-0 right-0 text-sm">{date}</p>
            <button className="absolute m-3 h-10 w-10 rounded-full decoration-none bg-[#fcf1e9] bottom-0 right-0 text-m z-50" onClick={() => openAlbum(date)}> + </button>
        </div>


        </>
    );
}

