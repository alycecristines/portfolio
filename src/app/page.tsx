import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProfileSection from "@/components/ProfileSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
	return (
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
			<Navbar />
			<div className="container mx-auto mt-24 px-12 py-4">
				<ProfileSection />
				<AboutSection />
				<ProjectsSection />
				<EmailSection />
			</div>
			<Footer />
		</main>
	);
}
