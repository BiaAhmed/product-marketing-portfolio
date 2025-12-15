import Marquee from "@components/misc/marquee";

const testimonials = [
	{
		id: 1,
		text: "Rabia joined PullFlow as a content marketer and was quickly promoted to Head of Marketing. She owned pre‑GTM strategy, dove deep into SQL and PostHog, shipped an Astro site in record time, and never shied away from messy problems. <strong>High energy, high agency, and a contrarian viewpoint that sparked real innovation.</strong>",
		author: "Zak Mandhro",
		role: "Founder of PullFlow / (ex‑Google, Apple; Stanford)",
		avatar: "/images/people/zak.webp",
	},
	{
		id: 2,
		text: "Her project was very insightful and we still often refer to it to help inform product-related decisions in different stages of the product life cycle…an amazing ability to assess an ambiguous problem, proactively find ways to solve it, and facilitate buy-in by working with colleagues in many functions and levels which are must-have skills when working so closely with products.",
		author: "Arham Tariq",
		role: "Head of Marketing @Xord",
		avatar: "/images/people/arham.webp",
	},
	{
		id: 3,
		text: "Rabia has a way of making complex things feel simple. I've seen her dive into data and AI tools with ease, but what really stands out is how she connects the technical side back to real business outcomes. She's not afraid to ask tough questions, challenge assumptions, and push projects in new directions. At the same time, she makes it easy for people from different backgrounds to collaborate and feel included. Working with her has been both inspiring and energizing.",
		author: "Ahmed Mustafa",
		role: "Principal AI Engineer @TalentBridge",
		avatar: "/images/people/Mustafa.png",
	},
	{
		id: 3,
		text: "While working together, I learned a lot from her from a copywriting, strategy, and design perspective. Cleona zeros in on the finest details but is always thinking about the bigger picture – and makes sure the team is, too!",
		author: "Shakeib Shaida",
		role: "CTO @CashflowApp",
		avatar: "/images/people/Shakeib.jpeg",
	},
	{
		id: 3,
		text: "I’ve seen her spearhead many digital marketing projects with deliverables spanning multiple touch points, and her attention to detail and ability to lead a team of varying professionals (copywriters, designers, developers) is seemingly effortless. For those lucky enough to work with her, you’ll find yourself motivated to rise to the standard she sets.",
		author: "Unzila Siddique",
		role: "Senior SEO Executive @PureSpuare",
		avatar: "/images/people/Unzila.jpeg",
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
                        <blockquote
                                className="mt-2 text-sm text-theme-sun-text dark:text-theme-moon-text"
                                // biome-ignore lint/security/noDangerouslySetInnerHtml: testimonials include trusted emphasis markup
                                dangerouslySetInnerHTML={{ __html: text }}
                        />
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