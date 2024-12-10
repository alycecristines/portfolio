"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function ProfileSection() {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-12 my-4">
			<div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
				<h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
					<span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						Hello, I&apos;m
					</span>
					<br></br>
					<TypeAnimation
						sequence={[
							"Alyce",
							1000,
							"Mobile Developer",
							1000,
							"Web Developer",
							1000,
							"Part-time musician",
							1000,
						]}
						wrapper="span"
						speed={50}
						repeat={Infinity}
					/>
				</h1>
				<p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
					Software developer focused on Front-end, skilled in Back-end when
					needed. Working with React, Next.js, and TypeScript, committed to
					quality deliveries.
				</p>
				<div>
					<button
						className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4"
						onClick={() =>
							window.open("https://linkedin.com/in/alycecristines", "_blank")
						}
					>
						Hire Me
					</button>
					<button
						className="my-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full"
						onClick={() =>
							window.open(
								"https://acsmack.blob.core.windows.net/acs/AlyceCV-enVersion.pdf",
								"_blank"
							)
						}
					>
						<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
							Download CV
						</span>
					</button>
				</div>
			</div>
			<div className="col-span-5 place-self-center mt-4 lg:mt-0">
				<div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
					<Image
						src="/profile-emoji.jpeg"
						alt="hero image"
						className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
						width={300}
						height={300}
					/>
				</div>
			</div>
		</section>
	);
}

export default ProfileSection;
