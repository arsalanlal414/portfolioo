'use client';

import Link from "next/link";
import NavigateLinks from "./NavigateLinks";

const SectionHeader = ({title, navUrl, navText}) => {
  return (
    <div className="flex flex-wrap justify-between items-center mb-6 w-full">
        <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
      <NavigateLinks  navUrl={navUrl} navText={navText}/>
    </div>
  )
}

export default SectionHeader