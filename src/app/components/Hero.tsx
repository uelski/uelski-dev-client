import Image from "next/image";
import Links from "./Links";

export default function Hero() {
    return (
        <div
      className="hero h-[75vh]"
      style={{
        backgroundImage:
          "url(/Contour-Map.svg)",
      }}
      >
      <div className="hero-overlay bg-black/65"></div>
      <div className="hero-content text-neutral-content text-center flex-col sm:flex-row">
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
          <a className="btn btn-secondary mb-6" href="#about">Take a Look</a>
          <Links />
        </div>
      </div>

    </div>
    );
}