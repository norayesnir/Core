<script lang="ts" setup>
	import type { MenuItem } from "#payload/types";
	import { GetMenuItemDocument } from "@/graphql";

	const props = defineProps({
		id: {
			type: (Number as PropType<number>) || undefined,
			required: true,
		},
	});

	interface MenuItemQueryResult {
		Menu_item: MenuItem;
	}

	const { data, error } = await useAsyncQuery<MenuItemQueryResult>(
		GetMenuItemDocument,
		{
			id: props.id,
		}
	);

	if (error.value) {
		console.error(error.value);
	}

	const MenuItem =
		data.value?.Menu_item.template === "Default"
			? ref(data.value?.Menu_item.default)
			: ref(data.value?.Menu_item.expandable);
</script>

<template>
	<NavigationMenuItemDefault
		v-if="data?.Menu_item.template === 'Default'"
		:title="data?.Menu_item.title"
		:item="MenuItem"
	/>
	<NavigationMenuItemExpandable
		v-else-if="data?.Menu_item.template === 'Expandable'"
		:title="data?.Menu_item.title"
		:item="MenuItem"
	/>
</template>
