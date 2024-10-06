import Hero from "@/components/ui/Hero";
import LemonSection from "@/components/ui/LemonSection";
import Nav from "@/components/ui/Nav";
import Image from "next/image";

export default function Home() {
  return (
<main className="h-full ">

  <Nav/>

   <Hero/>
   
   
   <LemonSection/> {/* main content goes here */}

  
  
   <footer className="border-t bg-white  flex justify-center border-neutral-200 h-40 p-5">
    <div className=" w-full max-w-7xl">
  <div className="flex text-neutral-900 justify-between">
   <span>Lemon. 2024</span>
   <span>all rights resevered</span>
   </div>
   <div className="flex text-neutral-500 mt-10 justify-between">
   <span>Twiiter</span>
   <span>instagram</span>
   <span>Playstore</span>
   <span>Appstore</span>
   </div>
   </div>
   </footer>

</main>
  );
}


