"use client"

import { useState } from "react";
import clsx from "clsx";
import styles from "@/app/styles";

interface TrainingPlanProps {
    general?: string,
    beginner?: string,
    intermediate?: string,
    advanced?: string,
}

export default function TrainingPlan({ props }: { props: TrainingPlanProps }) {
    const [selected, setSelected] = useState("");

    function sectionComponent({ title, content, keyword, color }: { title: string, content?: string, keyword: string, color: string }) {
        return (
            <button className={clsx('flex flex-col gap-0.5 border-2 py-3 px-5 rounded-xl', `border-${color}`)} onClick={() => selected === keyword ? setSelected("") : setSelected(keyword)}>
                <span className={`${styles.heading3} font-bold`}>{title.toUpperCase()}</span>
                <div
                    className={clsx(
                        'transition-all duration-300 ease-in-out',
                        selected === keyword ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    )}
                    style={{
                        transitionProperty: 'max-height, opacity',
                    }}
                >
                    <span className={`${styles.paragraph}`}>{content}</span>
                </div>
            </button>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
                <span className={`${styles.heading2} font-bold`}>TRAINING PLAN</span>
            </div>
            <div className="flex flex-col gap-4">

                {/* General Plan */}
                {props.general ? sectionComponent({ title: "General", content: props.general, keyword: "general", color: "blue-500" }) : null}

                {/* Beginner Plan */}
                {props.beginner ? sectionComponent({ title: "Beginner program", content: props.beginner, keyword: "beginner", color: "green-500" }) : null}

                {/* Intermediate Plan */}
                {props.intermediate ? sectionComponent({ title: "Intermediate program", content: props.intermediate, keyword: "intermediate", color: "orange-500" }) : null}

                {/* Advanced Plan */}
                {props.advanced ? sectionComponent({ title: "Advanced program", content: props.advanced, keyword: "advanced", color: "red-500" }) : null}
            </div>
        </div>
    );
}