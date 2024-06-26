import React from "react";
import { motion } from "framer-motion";

export const SocialLinks = () => {
	return (
		<section className="grid place-content-center gap-2 bg-indigo-500 px-8 py-24 text-white">
			<FlipLink href="https://x.com/imprasna">Twitter</FlipLink>
			<FlipLink href="https://www.linkedin.com/in/prasanna-s11/">Linkedin</FlipLink>
			<FlipLink href="https://www.facebook.com/Imprasna/">Facebook</FlipLink>
			<FlipLink href="https://www.instagram.com/_prxanaofficial_/">Instagram</FlipLink>
			<FlipLink href="https://github.com/Imprasna/">GitHub</FlipLink>
		</section>
	);
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
	return (
		<motion.a
			initial="initial"
			whileHover="hovered"
			href={href}
			className="relative block overflow-hidden whitespace-nowrap text-4xl my-3 font-black uppercase sm:text-7xl md:text-8xl lg:text-6xl"
			style={{
				lineHeight: 0.95,
			}}
		>
			<div>
				{children.split("").map((l, i) => (
					<motion.span
						variants={{
							initial: {
								y: 0,
							},
							hovered: {
								y: "-100%",
							},
						}}
						transition={{
							duration: DURATION,
							ease: "easeInOut",
							delay: STAGGER * i,
						}}
						className="inline-block"
						key={i}
					>
						{l}
					</motion.span>
				))}
			</div>
			<div className="absolute inset-0">
				{children.split("").map((l, i) => (
					<motion.span
						variants={{
							initial: {
								y: "100%",
							},
							hovered: {
								y: 0,
							},
						}}
						transition={{
							duration: DURATION,
							ease: "easeInOut",
							delay: STAGGER * i,
						}}
						className="inline-block"
						key={i}
					>
						{l}
					</motion.span>
				))}
			</div>
		</motion.a>
	);
};
