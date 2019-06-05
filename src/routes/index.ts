import Home from '@pages/Home'

export default [
	{
		path: '/',
		component: Home,
		routes: [
			{
				path: '/user',
				redirect: '/user/login'
			},
			{
				path: '/user/login',
				component: 'user/Login'
			},
			{
				path: '/user/register',
				component: 'user/Register'
			}
		]
	},
	{
		path: '/',
		component: 'layouts/BasicLayout',
		routes: [
			{
				path: '/',
				redirect: '/pages/index'
			},
			{
				path: '/pages',
				icon: 'pages',
				routes: [
					{
						path: '/pages/index',
						component: 'pages/Index',
					},
				],
			},
		]
	}
];
