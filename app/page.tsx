import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <div className="image-container overflow-hidden rounded-xl">
      <Image className="image-expand" src="/128.jpg" alt="a foggy forest treeline" width="800" height="700"/>
      </div>
      <p className="self-center pt-4 text-sm"> love yous</p>
    </main>
  );
}
