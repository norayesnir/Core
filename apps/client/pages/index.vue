<script setup lang="ts">
	const initialData = await usePayloadPage("Home");
	const { data: doc } = useLivePreview({ initialData });
</script>

<template>
	<div>
		<section class="container mx-auto">
			<span> {{ doc?.title }} </span>
			<h1 class="mt-10 text-4xl font-bold">Welcome to Rinsly Core</h1>
			<p class="text-xl">
				This is the core of Rinsly's website build with Nuxt 3 and Payload.
				It includes the following features:
			</p>
			<a
				class="inline-block px-6 py-4 mt-6 text-white bg-black rounded hover:bg-black/70"
				href="/admin"
			>
				Go to Dashboard
			</a>
		</section>
	</div>
</template>
