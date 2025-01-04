import Image from "next/image";
import Header from "@/app/components/common/Header";
import SessionBox from "../SessionBox";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import styles from "@/app/styles";

const dummyData =
{
    name: "Thursday Safety Refresher (All Levels)",
    date: "Tuesday, 15 October 2024",
    time: "17.00 - 19.00",
    numPax: 12,
    levels: ["Beginner", "Intermediate", "Advanced"],
}

export default function Page() {
    return (
        <div>
            <Header />
            <div className="px-8 py-6 flex flex-col gap-4 max-w-screen-xl mx-auto">
                <button className="flex gap-4 items-center">
                    <ChevronLeftIcon className="h-5 text-grey-500" />
                    <span className={`${styles.heading4} text-grey-500`}>BACK TO UPCOMING SESSIONS</span>
                </button>
                <span className="font-heading font-bold text-[22px]">{dummyData.name.toUpperCase()}</span>
                {/* <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
                    {dummyData.map((item) => <SessionBox props={item} />)}</div> */}
            </div>
        </div>
    );
}
