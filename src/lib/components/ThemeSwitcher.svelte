<script lang="ts">
	import theme from '$lib/stores/themes';
	let selected = $theme;
	function switchTheme() {
		theme.set(String(selected));
		document.body.className = String(selected);
	}
</script>

<select
	class="bg-blue font-semibold rounded-lg text-sm px-4 py-2.5 text-crust max-h-10"
	bind:value={selected}
	on:change={() => switchTheme()}
>
	<option value="">Dark</option>
	<option value="theme-light">Light</option>
</select>
