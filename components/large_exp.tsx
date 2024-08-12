"use client";
import React from 'react'
import SectionHeading from './section-heading'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';


export default function Large_exp() {
    const { ref } = useSectionInView("Education");
    const { theme } = useTheme();

  return (
  <section id="exp" ref={ref}>
    <SectionHeading>My Exp</SectionHeading>
    <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
                <VerticalTimelineElement 
                contentStyle={{
                    padding:"2px 50px",
                    background : "rgba(255, 255, 255, 0.05)",
                    textAlign: "left",
                }}
                icon={item.icon}
                iconStyle={{
                    background:
                      theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                    fontSize: "1.5rem",
                  }}
                  date={item.date}
                >
                    <h3 className="font-bold text-xl capitalize text-sky-400 px-8">{item.title}</h3>
                    <p className="!mt-0">{item.location}</p>
                    <p className="!font-normal text-gray-700 dark:text-white/75">{item.description}</p>
                </VerticalTimelineElement>
            </React.Fragment>
        ))}
    </VerticalTimeline>
  </section>
  )
}
