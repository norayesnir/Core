<script lang="ts" setup>
	import type { MenuItem } from "#payload/types";

	const props = defineProps({
		routes: {
			type: (Array as PropType<MenuItem[]>) || undefined,
			required: true,
		},
	});

	const ids = props.routes.map((route: MenuItem) => route.id);
</script>

<template>
	<div class="flex items-center gap-4">
		<NavigationMenuItem v-for="id in ids" :id="id" :key="id" />
	</div>
</template>
