import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className={`font-heading text-navy font-bold`}>NUS FREEDIVE</div>
      <div className="bg-red-500">
        <div className="text-white font-sans">Hello</div>
      </div>
      <div className="bg-red-500">
        <div className="text-white font-heading">Hello</div>
      </div>
      <div className="font-bold font-heading">
        THURSDAY SAFETY REFRESHER (ALL LEVELS)
      </div>
    </div>
  );
}
