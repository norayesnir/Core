<script setup lang="ts">
  const initialData = await usePayloadPage('Home')
  const { data: doc } = useLivePreview({ initialData })

  console.log(doc.value)
</script>

<template>
  <div>
    <section class="container mx-auto">
      <span> {{ doc.template }} </span>
      <h1 class="text-4xl font-bold mt-10">Welcome to Rinsly Core</h1>
      <p class="text-xl">This is the core of Rinsly's website build with Nuxt 3 and Payload. It includes the following features:</p>
      <a class="inline-block mt-6 py-4 px-6 bg-black text-white rounded hover:bg-black/70" href="/admin">Go to Dashboard</a>
    </section>
  </div>
</template>
