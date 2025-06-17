export const SITE_TITLE = "Rabia Ahmed | Product Marketer for AI & Dev Tools";
export const SITE_DESCRIPTION =
	"Blend AI/ML and marketing with a practical, sustainable, scalable approach";

export interface MenuItem {
	label: string;
	url: string;
}

export const menuItems: MenuItem[] = [
	{
		label: "rabia",
		url: "/",
	},
	{
		label: "writings",
		url: "/writings",
	},
	{
		label: "resources",
		url: "/resources",
	},
	{
		label: "ships",
		url: "/ships",
	},
];

export const title = "Rabia's Space";
export const description = "A internet space for Rabia.";
export const image = "/images/ogimage.png";
export const url = "https://rabiaahmed.me";

export const ogImage = {
	src: "/images/ogimage.png",
	alt: "Rabia's Space",
};

export const socialLinks = [
	{
		label: "@x",
		url: "https://x.com/biaahmedly",
	},
	{
		label: "email",
		url: "mailto:work@rabiaahmed.me",
	},
	{
		label: "github",
		url: "https://github.com/BiaAhmed",
	},
	{
		label: "linkedin",
		url: "https://www.linkedin.com/in/rabia-ahmed-khan/",
	},
];
