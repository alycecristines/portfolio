"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	tag: string[];
}

// Habiens (admin, app e api) - ok
// By the Life (App Admin e API) - ok
// Solo Consulta Preço (App, admin e api) - ok
// Intelekto (App) - ok
// Conecta DPE (app e api) - ok
// Vistoria (App) - ok
// Dr24horas (App ios manutencao) - ok
// template para ecommerce com vários clientes (B2C Alpha) - ok
// retiro-femoce (site para igreja) - ok

const projectsData: Project[] = [
	{
		id: 1,
		title: "NextJS Portfolio Website",
		description: "This portfolio",
		image: "/projects/portfolio.png",
		tag: ["All", "Web"],
	},
	{
		id: 2,
		title: "Habiens - Institute of Neuroscience",
		description: "Mobile App Development and Admin Panel",
		image: "/projects/habiens.png",
		tag: ["All", "Web", "Mobile"],
	},
	{
		id: 3,
		title: "By The Life Apps",
		description: "Project for a Pharmaceutical Distributor",
		image: "/projects/bythelife.png",
		tag: ["All", "Web", "Mobile"],
	},
	{
		id: 4,
		title: "Solo Medicamentos",
		description: "Pharmacy App",
		image: "/projects/solo.png",
		tag: ["All", "Mobile"],
	},
	{
		id: 5,
		title: "Contabilidade Intelekto",
		description: "Accounting Firm",
		image: "/projects/intelekto.png",
		tag: ["All", "Mobile"],
	},
	{
		id: 6,
		title: "Conecta DPE",
		description: "Public Defender's Office App",
		image: "/projects/dpe.png",
		tag: ["All", "Mobile"],
	},
	{
		id: 7,
		title: "Vistoria Interset",
		description: "Offline-First Property Inspection",
		image: "/projects/vistoria.png",
		tag: ["All", "Mobile"],
	},
	{
		id: 8,
		title: "B2C Alpha",
		description: "Ecommerce multi-tenant adaptation",
		image: "/projects/alpha-b2c.png",
		tag: ["All", "Web"],
	},
	{
		id: 9,
		title: "Retiro FEMOCE ICEB",
		description: "Church Retreat Registration Website",
		image: "/projects/retiro.png",
		tag: ["All", "Web"],
	},
	{
		id: 10,
		title: "Dr24horas Paciente",
		description: "Maintenance of a Medical Appointment App",
		image: "/projects/dr24horas.png",
		tag: ["All", "Mobile"],
	},
];

function ProjectsSection() {
	const [tag, setTag] = useState<string>("All");

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);

	const handleTagChange = (newTag: string) => {
		setTag(newTag);
	};

	return (
		<div className="mt-40">
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				Featured projects
			</h2>
			<div className="flex flex-row justify-center items-center gap-2 text-white my-6">
				<ProjectTag
					name="All"
					onClick={handleTagChange}
					isSelected={tag === "All"}
				/>
				<ProjectTag
					name="Web"
					onClick={handleTagChange}
					isSelected={tag === "Web"}
				/>
				<ProjectTag
					name="Mobile"
					onClick={handleTagChange}
					isSelected={tag === "Mobile"}
				/>
			</div>
			<div className="grid md:grid-cols-3 gap-8 md:gap-12">
				{filteredProjects.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imgUrl={project.image}
					/>
				))}
			</div>
		</div>
	);
}

export default ProjectsSection;
