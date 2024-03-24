import Link from 'next/link';
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="NotFound m-20 mx-32 p-8 flex flex-col items-center bg-[#d94100] rounded-xl">
      <h2 className="mt-10 text-9xl">Oops </h2>
      <p className="text-3xl mb-8 font-serif"> unfortunately, that's not a page :/</p>
      <Image src="/4.jpg" width={500} height={500} alt="404" class="rounded-xl m-10"/>
      <div className="bg-[#c7b29f] p-4 rounded-xl hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"><Link href="/">Return Home</Link></div>
    </div>
  )
}