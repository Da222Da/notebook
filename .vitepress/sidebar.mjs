export default function sidebar() {
	return {
		ignoreDeadLinks: true,
		"/": {
			items: [
				// {
				// 	text: "基础知识",
				// 	collapsed: false,
				// 	items: [
				// 		{
				// 			text: "JavaScript 语法约定",
				// 			items: [
				// 				{
				// 					text: "ES 语法约定",
				// 					link: "/client/grammar/es.md",
				// 				},
				// 				{
				// 					text: "TS 语法约定",
				// 					link: "/client/grammar/ts.md",
				// 				},
				// 			],
				// 		},
				// 		{
				// 			text: "VueJS：组件化框架",
				// 			items: [
				// 				{
				// 					text: "VueJS",
				// 					link: "/client/component/vue.md",
				// 				},
				// 			],
				// 		},
				// 		// { text: "可视化方案", items: [{ text: "D3", link: "/client/visual/d3.md" }] },
				// 		{
				// 			text: "工程化方案",
				// 			collapsed: true,
				// 			items: [
				// 				{ text: "Webpack", link: "/client/engineering/webpack.md" },
				// 				{ text: "Rollup", link: "/client/engineering/rollup.md" },
				// 			],
				// 		},
				// 		// {
				// 		// 	text: "微前端方案",
				// 		// 	collapsed: true,
				// 		// 	items: [
				// 		// 		{ text: "无界", link: "/client/micro/wujie.md" },
				// 		// 		{ text: "乾坤", link: "/client/micro/qiankun.md" },
				// 		// 	],
				// 		// },
				// 	],
				// },
				// {
				// 	text: "服务端 Server",
				// 	collapsed: false,
				// 	items: [
				// 		{
				// 			text: "服务器",
				// 			items: [
				// 				{
				// 					text: "Koa 服务器框架",
				// 					link: "/server/nodejs/koa.md",
				// 				},
				// 			],
				// 		},
				// 	],
				// },
				{
					text: "问题 & 解决方案",
					collapsed: false,
					items: [
						{
							text: "构建 Vue3 的项目模板",
							link: "/question/vite-vue3-template/",
						},
						{
							text: "Vue3 组件库设计与实现",
							link: "/question/vue3-component/",
						},
						{
							text: "Wujie 构建微前端项目架构",
							link: "/question/micro-app/",
						},
						// {
						// 	text: "CLI 脚手架开发",
						// 	link: "/apps/cli.md",
						// },
					],
				},
			],
		},
		"/apps/": {
			items: [
				{ text: "快速开始", link: "/apps/vitepress-vue3-component/" },
				{
					text: "组件",
					items: [
						{ text: "面包屑导航", link: "/apps/vitepress-vue3-component/components/breadcrumb" },
						{ text: "思维导图", link: "/apps/vitepress-vue3-component/components/mindmap" },
					],
				},
			],
		},
	};
}
