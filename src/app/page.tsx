import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="bg-[url('/Contour-Map.svg')] bg-cover bg-center h-[75vh]">
        <div>
          <Image
            className=""
            src="/sv-masthead.jpeg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>

      </main>

    </div>
  );
}
