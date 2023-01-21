<script>
	import { base } from '$app/paths';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<nav class="flex h-20 items-center justify-between px-8">
	<div class="flex space-x-6">
		<a href=" {base}/">
			<h1 class="text-3xl font-bold text-lavender">Welcome!</h1>
		</a>
	</div>
	<div class="flex items-center space-x-6">
		<nav class="flex items-center space-x-6 font-semibold">
			<a
				class=""
				target="_blank"
				href="https://github.com/elias-knodel"
				rel="noopener noreferrer nofollow"
			>
				GitHub
			</a>
			<a class="hidden sm:block" href="{base}#_">Portfolio<sup>(soon)</sup></a>
			<ThemeSwitcher />
		</nav>
	</div>
</nav>
