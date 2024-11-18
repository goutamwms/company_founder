<template>
  <div v-if="error">
    <p class="text-red-500 text-center mt-2">Error: {{ error.message }}</p>
  </div>
  <slot v-else></slot>
</template>

<script>
import { defineComponent, ref, watchEffect } from 'vue'

export default defineComponent({
  props: ['error'],
  setup(props) {
    const errorData = ref(props.error)

    watchEffect(() => {
      if (props.error) errorData.value = props.error
    })

    return { errorData }
  },
})
</script>
