import Link from "next/link";
import Image from "next/image";

export default function Nav() {
    return (
        <div className="Nav">
            <div className="flex flex-col items-center">
                <Link href="/" className="mt-12 title"> Bar Chovy</Link>
                <Image src="/anchovy.png" alt="anchovy icon" width="350" height="350" className="self-center mb-20"></Image>
                <p className="-mt-16 mb-10 subtitle">a monthly supper club at 45th st.</p>
            </div>
            <nav>
                <div className="flex justify-around">
                    <Link href="/about" className="link"> about </Link>
                    <Link href="/menu" className="link"> menu</Link>
                    <Link href="/gallery" className="link">gallery</Link>
                    <Link href="/rsvp" className="link">rsvp</Link>
                </div>
            </nav>
        </div>
    );
}