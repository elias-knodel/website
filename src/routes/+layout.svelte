<script>
	import '../app.less';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<div class="my-auto">
		<slot />
	</div>
	<Footer />
</div>
