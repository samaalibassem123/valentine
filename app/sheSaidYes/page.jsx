import React from "react";

export default function page() {
  return (
    <main className="bg-white h-screen w-full flex flex-col text-black justify-center items-center font-sans text-2xl">
      <video
        src="/achref.mp4"
        autoPlay={true}
        controls
        preload="metadata"
        className="w-full h-full cover"
      />
    </main>
  );
}
