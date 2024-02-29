import Image from 'next/image';
import Nav from "./components/Nav/nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <Image className="rounded-xl" src="/128.jpg" alt="a foggy forest treeline" width="800" height="700"/>
      <p className="self-center pt-4 text-sm"> love yous</p>
    </main>
  );
}
