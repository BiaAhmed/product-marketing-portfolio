import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "@data/index";
import { getCollection } from "astro:content";

export async function GET(context) {
	const [posts, resources, ships] = await Promise.all([
		getCollection("writing"),
		getCollection("resource"),
		getCollection("ship"),
	]);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: [
			...posts.map((post) => ({
				...post.data,
				link: `/writings/${post.slug}/`,
			})),
			...resources.map((resource) => ({
				...resource.data,
				link: `/resources/${resource.slug}/`,
			})),
			...ships.map((ship) => ({
				...ship.data,
				link: `/ships/${ship.slug}/`,
			})),
		],
	});
}
