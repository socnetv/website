import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// import rehypeMathjax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
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
							// Author configuration for the `alice` author goes here.
							name: 'Dimitris',
							title: 'developer',
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
			sidebar: [
				{ label: 'Home', slug: 'index' },
				// A group labelled 'Docs' containing four links.
				{
					label: 'Manual',
					items: [
						{ label: 'Introduction', slug: 'docs/intro' },
						{ label: 'User Interface', slug: 'docs/gui' },
						{ label: 'Formats', slug: 'docs/formats' },
						{ label: 'Generate', slug: 'docs/generate' },
						{ label: 'Analysis', slug: 'docs/analysis' },
						{ label: 'Visualization', slug: 'docs/visualization' },
						{ label: 'Credits', slug: 'docs/credits' },
						{ label: 'References', slug: 'docs/references' },
						{ label: 'License', slug: 'docs/license' },
						{ label: 'Bugs', slug: 'docs/bugs' },
					],
				},
				{ label: 'Downloads', slug: 'downloads' },
				{ label: 'News', slug: 'news' },
				{ label: 'Screenshots', slug: 'screenshots' },
				{ label: 'Bugs', slug: 'bugs' },
				// { label: 'Documentation', slug: 'documentation' },
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
