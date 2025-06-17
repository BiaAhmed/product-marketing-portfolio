import { useState } from "react";

const testimonials = [
	{
		id: 1,
		text: "Rabia joined PullFlow as a content marketer and was quickly promoted to Head of Marketing. She owned pre‑GTM strategy, dove deep into SQL and PostHog, shipped an Astro site in record time, and never shied away from messy problems. High energy, high agency, and a contrarian viewpoint that sparked real innovation.",
		author: "Zak Mandhro",
		role: "Founder of PullFlow / (ex‑Google, Apple; Stanford)",
		avatar: "/images/people/zak.webp",
	},
	{
		id: 2,
		text: "I would 100% recommend Rabia if you are looking for an analytics, data or technical SEO strategist. We have worked on a couple of projects together and both her knowledge and attention to detail always impresses me. She's also a wonderful human to work with, very friendly and approachable. The most recent project was sorting out existing data discrepancies with Google Analytics and getting us set up and sorted with GTM & GA4, including training on how to use GA4. Very impressed and hope to work on many more projects in the future.",
		author: "Arham Tariq",
		role: "Head of Marketing @Xord",
		avatar: "/images/people/arham.webp",
	},
];

export default function Testimonials() {
	const [active, setActive] = useState<number>(1);

	return (
		<section id="testimonials">
			<div className="px-8 md:px-12 py-12 max-w-2xl mx-auto">
				<div className="relative overflow-hidden">
					<div className="container flex flex-col justify-center overflow-hidden md:flex-row">
						<div className="relative flex flex-col h-full text-left w-full">
							<div className="relative z-10 h-full">
								<div className="pb-6 max-w-xl mx-auto">
									{testimonials.map((t) => (
										<div
											key={t.id}
											className={`${active === t.id ? "" : "hidden"}`}
										>
											<p className="font-medium leading-6 text-zinc-500 text-base text-balance flex gap-2 items-center text-center mx-auto">
												{t.text}
											</p>
										</div>
									))}
								</div>

								<div className="flex items-center justify-center mt-6 lg:my-4">
									{testimonials.map((t) => (
										<button
											key={t.id}
											onClick={(e) => {
												e.preventDefault();
												setActive(t.id);
											}}
											className={`inline-block mx-2 font-bold text-center rounded-full shadow-xs focus:outline-none focus:ring-2 size-12 transition-all duration-300 ${
												active === t.id
													? "opacity-100 bg-gradientdown text-white"
													: "opacity-50 bg-gradientdown"
											}`}
											type="button"
										>
											<img
												className="inline-block w-12 h-12 rounded-full border"
												src={t.avatar}
												alt={t.author}
												loading="lazy"
												decoding="async"
											/>
										</button>
									))}
								</div>

								<div className="flex justify-center px-4 pt-4 pb-6 md:py-6">
									{testimonials.map((t) => (
										<div
											key={t.id}
											className={`text-center ${
												active === t.id ? "" : "hidden"
											}`}
										>
											<h2 className="text-zinc-500 text-sm font-medium lg:text-base">
												{t.author}
											</h2>
											<span className="text-xs text-zinc-500">{t.role}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
