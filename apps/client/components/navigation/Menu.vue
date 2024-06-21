<script setup lang="ts">
	import type { NavigationMenu } from "#payload/types";
	import { GetNavigationMenuDocument } from "@/graphql";
	import getIcon from "@/utils/getIcon";

	getIcon();

	interface NavigationMenuQueryResult {
		NavigationMenu: NavigationMenu;
	}

	const { data } = useAsyncQuery<NavigationMenuQueryResult>(
		GetNavigationMenuDocument
	);
</script>

<template>
	<nav class="sticky w-full border-b border-neutral-20">
		<div class="container">
			<div class="flex items-center justify-between py-4">
				<div class="flex items-center justify-between w-full">
					<NuxtLink to="/">
						<PayloadImage
							:image="data?.NavigationMenu.logo"
							class="h-12"
						/>
					</NuxtLink>

					<NavigationRoutes :routes="data?.NavigationMenu.routes" />
				</div>
			</div>
		</div>
	</nav>
</template>
