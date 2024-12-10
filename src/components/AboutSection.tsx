"use client";
import React, { ReactNode, useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface Tab {
	title: string;
	id: string;
	content: ReactNode;
}

const TAB_DATA: Tab[] = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 list-disc pl-4">
				<li>React</li>
				<li>React Native</li>
				<li>Node.js</li>
				<li>PostgreSQL</li>
				<li>NestJS</li>
				<li>NextJS</li>
				<li>Typescript</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-disc pl-2">
				<li>Bachelor&apos;s Degree in Systems Analysis and Development, UEG - Brazil</li>
				<li>Bachelor&apos;s Degree in Computer Networks Technology, FANAP - Brazil</li>
			</ul>
		),
	},
	{
		title: "Certifications",
		id: "certifications",
		content: (
			<ul className="list-disc pl-2">
				<li>Work in progress for this one (hang in there for a moment)</li>
			</ul>
		),
	},
];

function AboutSection() {
	const [tab, setTab] = useState<string>("skills");
	const [, startTransition] = useTransition();

	const handleTabChange = (id: string) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section className="text-white mt-20">
			<div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
				<Image
					src="/me.jpg"
					width={500}
					height={500}
					alt="About Me"
					className="rounded-3xl"
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-white text-base md:text-lg">
						I am a Front-end Developer with 6 years of experience in the tech
						industry. I began my journey in a software development company,
						building ERP and e-commerce integrations (a story worth sharing over
						a longer conversation). I consider myself a calm and dedicated
						professional, always committed to delivering well-organized and
						thoughtfully designed solutions. I’m a fast learner and thrive in
						environments that offer opportunities for continuous growth and
						learning. I hold a degree in Computer Networks from UEG and another
						in Systems Analysis and Development from FANAP—and who knows what
						the future holds for more learning adventures! <br /> Thanks for visiting
						my site! 😊
					</p>
					<div className="flex flex-row justify-start mt-8">
						{TAB_DATA.map((tabItem) => (
							<TabButton
								key={tabItem.id}
								selectTab={() => handleTabChange(tabItem.id)}
								active={tab === tabItem.id}
							>
								{tabItem.title}
							</TabButton>
						))}
					</div>
					<div className="mt-8">
						{TAB_DATA.find((t) => t.id === tab)?.content}
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
