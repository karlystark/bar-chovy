import Link from 'next/link';
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="NotFound mt-10 mb-10 flex flex-col items-center">
      <Image src="/beets.jpg" alt="Beets" width={500} height={500} className="rounded-xl"/>
      <h2 className="m-10 mt-18 text-4xl">Oops, that's not a page.</h2>
      <div className="m-10 bg-[#5d7633] p-6 rounded-xl"><Link href="/">Return Home</Link></div>
    </div>
  )
}