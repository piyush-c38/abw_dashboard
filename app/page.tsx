import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center relative "
        style={{
          backgroundImage: "url('blue_wall_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        {/* Black blur overlay */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="w-3/4 h-3/4 bg-gray-50 z-10 rounded-2xl">
          <Image
            src="/logo_506.png"
            alt="Logo_506"
            width={120}
            height={120}
            className="mb-6"
          />
          <Button>Button</Button>
        </div>
      </div>
    </>
  );
}
