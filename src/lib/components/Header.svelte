<script>
	import { base } from '$app/paths';
</script>

<nav class="flex justify-between h-20 items-center px-8">
	<div class="flex space-x-6">
		<a href=" {base}/">
			<h1 class="font-bold text-3xl text-lavender">Welcome!</h1>
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
		</nav>
	</div>
</nav>
