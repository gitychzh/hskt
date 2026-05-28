// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	site: 'https://223722.xyz',
	integrations: [
		starlight({
			title: '红薯课堂',
			description:
				'涵盖中小学到成人教育，包括计算机编程、PLC自动化、python、js、网页设计、数学、语文、英语、物理、化学、生物等多个学科的学习资源与教程。',
			defaultLocale: 'root',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			logo: {
				light: './src/assets/logo-light.png',
				dark: './src/assets/logo-dark.png',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/gitychzh/hskt',
				},
			],
			sidebar: [
				{
					label: '首页',
					link: '/',
				},
				{
					label: '博客',
					link: '/blog/',
				},
				{
					label: '计算机',
					items: [
						{ label: '概述', slug: 'computer/overview' },
						{
							label: 'Git 相关',
							items: [{ autogenerate: { directory: 'computer/git' } }],
						},
						{
							label: '博客教程',
							items: [{ autogenerate: { directory: 'computer/blog-tutorial' } }],
						},
						{
							label: 'C#',
							items: [{ autogenerate: { directory: 'computer/csharp' } }],
						},
					],
				},
				{
					label: 'AutoX.js',
					items: [
						{ label: '简介', slug: 'autox/introduction' },
						{
							label: '基础',
							items: [{ autogenerate: { directory: 'autox/basic' } }],
						},
						{
							label: '进阶',
							items: [{ autogenerate: { directory: 'autox/advanced' } }],
						},
						{
							label: '修改扩展',
							items: [{ autogenerate: { directory: 'autox/modification' } }],
						},
						{
							label: 'NPM 模块',
							items: [{ autogenerate: { directory: 'autox/npm' } }],
						},
						{ label: '常见问题', slug: 'autox/qa' },
					],
				},
			],
			plugins: [starlightBlog()],
		}),
	],
});