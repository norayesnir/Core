<script lang="ts" setup>
  import type { H3Error } from 'h3'

  interface Props {
    error: H3Error
  }
  const props = defineProps<Props>()

  const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <section class="py-20 h-screen bg-black">
    <div class="container mx-auto">
      <div class="p-10 bg-gray-900 rounded-xl">
        <h1 class="text-4xl text-white font-bold mb-4">Error</h1>
        <p class="mb-10 text-white" v-text="props.error.message" />
        <button class="ml-auto inline-block py-4 px-6 bg-white hover:bg-white/70 rounded" @click="handleError">Dismiss</button>
      </div>
    </div>
  </section>
</template>
