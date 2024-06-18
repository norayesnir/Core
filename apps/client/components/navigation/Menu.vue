<script setup lang="ts">
	const initialData = useRelationshipField("NavigationMenu");
	const { data: doc } = useLivePreview({ initialData });

	console.log(doc.value);
</script>

<template>
	<nav class="sticky w-full border-b border-b-black">
		<div class="container py-6 mx-auto">Navigation Menu</div>
	</nav>
</template>
