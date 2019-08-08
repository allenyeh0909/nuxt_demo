<template>
	<div>
		<el-container>
			<el-header>
				<header-nav></header-nav>
			</el-header>
			<el-container>
				<el-aside width="160px">
					<side-bar></side-bar>
				</el-aside>
				<el-main>
					<nuxt />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import headerNav from '@/components/head'
	import sideBar from '@/components/side-bar'
	export default {
		components: {
			headerNav,
			sideBar,
		}
	}
</script>

<style scoped>
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #f1f1f1;
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
	}

	body>.el-container {
		margin-bottom: 40px;
	}
</style>
