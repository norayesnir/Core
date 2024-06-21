<script setup lang="ts">
	import type { MenuItem } from "#payload/types";

	const props = defineProps({
		title: {
			type: String || undefined,
			required: true,
		},
		item: {
			type: Object || undefined,
			required: true,
		},
	});

	const Title = ref(props.title);
	const MenuItem = ref(props.item);

	// Injecting the closeExpand function
	const closeExpand = inject<() => void>("closeExpand");
</script>

<template>
	<a
		v-if="MenuItem?.externalLink"
		class="flex items-center gap-1 px-2 py-1 transition-colors duration-200 rounded text-font hover:bg-neutral-5"
		:href="MenuItem?.externalUrl"
	>
		{{ Title }}
		<Icon name="material-symbols:open-in-new" size="12" />
	</a>
	<NuxtLink
		v-else-if="MenuItem?.referenceToPage.route"
		class="flex gap-1 px-2 py-1 transition-colors duration-200 rounded text-font hover:bg-neutral-5 has-[.router-link-active]:bg-neutral-5"
		:class="{
			'grid [&>.icon]:order-1 grid-cols-[1fr_16px]':
				MenuItem?.icon?.name && MenuItem?.icon?.right,
			'grid grid-cols-[16px_1fr]':
				MenuItem?.icon?.name && !MenuItem?.icon?.right,
		}"
		:to="MenuItem?.referenceToPage.route"
		@click="closeExpand"
	>
		<Icon
			v-if="MenuItem?.icon.name"
			class="mt-[3px]"
			:name="
				'material-symbols:' +
				MenuItem?.icon.name.replace(/_/g, '-') +
				'-outline-rounded'
			"
		/>
		{{ Title }}
	</NuxtLink>
</template>
