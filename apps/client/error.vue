<template>
  <div>
    <p class="text-red-800 mb-10" v-text="props.error.message" />
    <button class="text-white border border-red-600 rounded bg-red-600 hover:bg-red-200 hover:text-red-600" @click="handleError">Clear errors</button>
  </div>
</template>

<script lang="ts" setup>
import type { H3Error } from 'h3'

interface Props {
  error: H3Error
}
const props = defineProps<Props>()

const handleError = () => clearError({ redirect: '/' })
</script>
