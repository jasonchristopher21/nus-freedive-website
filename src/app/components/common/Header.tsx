import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <div className="sticky top-0 w-full bg-navy py-4 px-6">
      <div className="flex justify-between bg-navy text-white max-w-screen-xl mx-auto">
        <Bars3Icon className="h-[24px] my-auto" />
        <span className="font-heading font-bold text-[20px]">
          NUS FREEDIVING
        </span>
        <span className="my-auto">ICON</span>
      </div>
    </div>
  );
}
