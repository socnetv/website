import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SocNetV',
			social: {
				github: 'https://github.com/socnetv/app',
			},
			sidebar: [
				{ label: 'Home', slug: 'index' },
				{ label: 'Downloads', slug: 'downloads' },
				{ label: 'News', slug: 'news' },
				{ label: 'Screenshots', slug: 'screenshots' },
				{ label: 'Bugs', slug: 'bugs' },
				{ label: 'Documentation', slug: 'documentation' },
				{ label: 'Contact', slug: 'contact' },
				{ label: 'Author', slug: 'author' },
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'guides/intro' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
