import { clsx } from "@utils/clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
	className?: string;
	reverse?: boolean;
	pauseOnHover?: boolean;
	children: ReactNode;
	vertical?: boolean;
	repeat?: number;
}

export default function Marquee({
	className,
	reverse = false,
	pauseOnHover = false,
	children,
	vertical = false,
	repeat = 4,
	...props
}: MarqueeProps) {
	const ids = Array.from({ length: repeat }, () => crypto.randomUUID());
	return (
		<div
			{...props}
			className={clsx(
				"group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
				vertical ? "flex-col" : "flex-row",
				className,
			)}
		>
			{ids.map((id, i) => {
				return (
					<div
						key={id}
						className={clsx(
							"flex shrink-0 justify-around [gap:var(--gap)]",
							vertical
								? "animate-marquee-vertical flex-col"
								: "animate-marquee flex-row",
							pauseOnHover && "group-hover:[animation-play-state:paused]",
							reverse && "[animation-direction:reverse]",
						)}
					>
						{children}
					</div>
				);
			})}
		</div>
	);
}
