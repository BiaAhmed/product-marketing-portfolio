import { clsx } from "@utils/index";
import { type MotionProps, motion } from "motion/react";
import { type ReactNode, useEffect, useRef, useState } from "react";

interface AnimatedSpanProps extends MotionProps {
	children: ReactNode;
	delay?: number;
	className?: string;
}

export function AnimatedSpan({
	children,
	delay = 0,
	className,
	...props
}: AnimatedSpanProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -5 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, delay: delay / 1000 }}
			className={clsx("grid text-sm font-normal tracking-tight", className)}
			{...props}
		>
			{children}
		</motion.div>
	);
}

interface TypingAnimationProps extends MotionProps {
	children: string;
	className?: string;
	duration?: number;
	delay?: number;
	as?: React.ElementType;
}

export function TypingAnimation({
	children,
	className,
	duration = 60,
	delay = 0,
	as: Component = "span",
	...props
}: TypingAnimationProps) {
	if (typeof children !== "string") {
		throw new Error("TypingAnimation: children must be a string.");
	}

	const MotionComponent = motion.create(Component, {
		forwardMotionProps: true,
	});

	const [displayedText, setDisplayedText] = useState<string>("");
	const [started, setStarted] = useState(false);
	const elementRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const startTimeout = setTimeout(() => {
			setStarted(true);
		}, delay);
		return () => clearTimeout(startTimeout);
	}, [delay]);

	useEffect(() => {
		if (!started) return;

		let i = 0;
		const typingEffect = setInterval(() => {
			if (i < children.length) {
				setDisplayedText(children.substring(0, i + 1));
				i += 1;
			} else {
				clearInterval(typingEffect);
			}
		}, duration);

		return () => clearInterval(typingEffect);
	}, [children, duration, started]);

	return (
		<MotionComponent
			ref={elementRef}
			className={clsx("text-sm font-normal tracking-tight", className)}
			{...props}
		>
			{displayedText}
		</MotionComponent>
	);
}

interface TerminalProps {
	children: ReactNode;
	className?: string;
}

export default function Terminal({ children, className }: TerminalProps) {
	return (
		<div
			className={clsx(
				"z-0 h-full max-h-[400px] w-full max-w-lg rounded-xl border border-theme-sun-border dark:border-theme-moon-border bg-theme-sun-bgAccent dark:bg-theme-moon-bgAccent",
				className,
			)}
		>
			<div className="flex gap-2 py-6 px-4">
				<div className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
				<div className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
				<div className="h-2.5 w-2.5 rounded-full bg-[#a3e635]" />
			</div>
			<pre className="p-4">
				<code className="grid gap-y-1 overflow-auto text-sm ml-4 font-mono text-green whitespace-pre-line text-left text-theme-sun-text dark:text-theme-moon-text">
					{children}
				</code>
			</pre>
		</div>
	);
}
