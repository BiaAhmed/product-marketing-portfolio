import Marquee from "@components/misc/marquee";

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

function ReviewCard({
	avatar,
	author,
	role,
	text,
}: {
	avatar: string;
	author: string;
	role: string;
	text: string;
}) {
	return (
		<figure className="relative w-64 shrink-0 overflow-hidden rounded-xl border border-theme-sun-border/10 bg-white p-4 dark:border-theme-moon-border/10 dark:bg-theme-moon-bgAccent">
			<div className="flex items-center gap-2">
				<img
					className="rounded-full"
					width="32"
					height="32"
					src={avatar}
					alt={author}
				/>
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium text-theme-sun-text dark:text-theme-moon-text">
						{author}
					</figcaption>
					<p className="text-xs text-theme-sun-textMuted dark:text-theme-moon-textMuted">
						{role}
					</p>
				</div>
			</div>
			<blockquote className="mt-2 text-sm text-theme-sun-text dark:text-theme-moon-text">
				{text}
			</blockquote>
		</figure>
	);
}

export default function TestimonialsMarquee() {
	return (
		<section id="testimonials" className="relative overflow-hidden py-12">
			<Marquee pauseOnHover className="[--duration:20s]">
				{testimonials.map((t) => (
					<ReviewCard key={t.id} {...t} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-theme-sun-bg dark:from-theme-moon-bg" />
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-theme-sun-bg dark:from-theme-moon-bg" />
		</section>
	);
}
