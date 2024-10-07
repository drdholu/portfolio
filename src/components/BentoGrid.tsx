import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { EvervaultCard } from "./ui/evervault-card";
import info from "../data/info"

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          // icon={item.icon}
          link={item.link}
          className={i === 3 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );
// const Skeleton = ({ icon }: { icon: React.ReactNode }) => (
//     <EvervaultCard text={icon} />
// );

const items = [
  {
    title: "Skills",
    description: info.Skills.description,
    header: info.Skills.header,
    link: info.Skills.link,
  },
  {
    title: "Projects",
    description: info.Projects.description,
    header: info.Projects.header,
    link: info.Projects.link,
  },
  {
    title: "Positions of responsibility",
    description: info["Positions of Responsibility"].description,
    header: info["Positions of Responsibility"].header,
    link: info["Positions of Responsibility"].link
  },
  {
    title: "Education",
    description: info.Education.description,
    header: info.Education.header,
    link: info.Education.link
  },
  {
    title: "Lets Connect",
    description: info.Contact.description,
    header: info.Contact.header,
    link: info.Contact.link
  },
];