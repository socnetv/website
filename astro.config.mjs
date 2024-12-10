import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// import rehypeMathjax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
	site: 'https://socnetv.org',
	base: '/',
	redirects: {
    '/docs/formats.html': '/manual/formats',
		'/docs/intro.html': '/manual/intro',
		'/docs/references': '/manual/references',
		'/docs/generate': '/manual/generate',
		'/docs/analysis': '/manual/analysis',
		'/docs/visualization': '/manual/visualization',
		'/docs/credits.html': '/manual/credits',
		'/manual/visualisation': '/manual/visualization',
		'/data/uploads/screenshots/25/socnetv-25-erdos-renyi-200actors.jpg': '/screenshots/25/socnetv-25-erdos-renyi-200actors.jpg',
    	'/search': '/',
		'/docs/SRS-Documentation-SocNetV.pdf': '/SRS-Documentation-SocNetV.pdf',
  },
	integrations: [
		starlight({
			plugins: [
				starlightBlog({
					// Configuration options go here.
					title: {
						en: 'News',
						fr: 'Nouvelles',
					},
					prefix: 'news',
					authors: {
						dimitris: {
							// Author configuration for the `dimitris` author goes here.
							name: 'Dimitris',
							url: 'https://dimitris.apeiro.gr'
						},
					},
				})
			],
			title: 'SocNetV',
			description: 'Social Network Analysis: Social Network Visualizer (SocNetV) is a user-friendly and free software tool for Social Network Analysis and Visualization.',
			logo: {
				alt: 'SocNetV',
				src: './src/assets/socnetv-logo-256-no-bg-opt.svg',
				// replacesTitle: true, 
			},
			social: {
				github: 'https://github.com/socnetv/app',
			},
			disable404Route: true,
			sidebar: [
				{ label: 'Home', slug: 'index' },
				// A group labelled 'Docs' containing four links.
				{
					label: 'Manual',
					items: [
						{ label: 'Introduction', slug: 'manual/intro' },
						{ label: 'User Interface', slug: 'manual/gui' },
						{ label: 'Formats', slug: 'manual/formats' },
						{ label: 'Generate', slug: 'manual/generate' },
						{ label: 'Analysis', slug: 'manual/analysis' },
						{ label: 'Visualization', slug: 'manual/visualization' },
						{ label: 'Credits', slug: 'manual/credits' },
						{ label: 'References', slug: 'manual/references' },
						{ label: 'License', slug: 'manual/license' },
						{ label: 'Bugs', slug: 'manual/bugs' },
					],
				},
				{ label: 'Downloads', slug: 'downloads' },
				{ label: 'News', slug: 'news' },
				{ label: 'Screenshots', slug: 'screenshots' },
				{ label: 'Bugs', slug: 'bugs' },
				// { label: 'Documentation', slug: 'documentation' },
				{ label: 'Contact', slug: 'contact' },
				{ label: 'Author', slug: 'author' },

				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Introduction', slug: 'guides/intro' },
				// 	],
				// },

				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [
			// [
			// 	rehypeMathjax,
			// 	{
			// 		tex: {
			// 			inlineMath: [['\\(', '\\)']],
			// 			displayMath: [['\\[', '\\]']],
			// 		  },
			// 		  svg: {
			// 			fontCache: 'global'
			// 		  }
			// 	}
			// ],
			[
				rehypeKatex,
				{
					// Katex plugin options
					// tex: {
					// 	inlineMath: [['\(', '\)']],
					// 	displayMath: [['\\[', '\\]']],
					//   },
				}
			]
		]
	}
});
