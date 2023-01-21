<script lang="ts">
	import theme from '$lib/stores/themes';
	let selected = $theme;
	function switchTheme() {
		theme.set(String(selected));
		document.body.className = String(selected);
	}
</script>

<select
	class="max-h-10 rounded-lg bg-blue px-4 py-2.5 text-sm font-semibold text-crust"
	bind:value={selected}
	on:change={() => switchTheme()}
>
	<option value="">Dark</option>
	<option value="theme-light">Light</option>
</select>
