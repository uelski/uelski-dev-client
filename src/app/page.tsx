import Image from "next/image";

export default function Home() {
  return (
      
      <div
      className="hero h-[75vh]"
      style={{
        backgroundImage:
          "url(/Contour-Map.svg)",
      }}
      >
      <div className="hero-overlay bg-black/65"></div>
      <div className="hero-content text-neutral-content text-center">
        <Image
          className=""
          src="/sv-masthead.jpeg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Sam Vredenburgh</h1>
          <p className="mb-5 text-xl">
            I am a full stack developer with a curious mind that I like to let wander.
          </p>
          <button className="btn btn-secondary">Take a Look</button>
        </div>
      </div>

    </div>
  );
}
