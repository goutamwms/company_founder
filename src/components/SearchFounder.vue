<template>
  <input
    type="text"
    v-model="query"
    @input="onInput"
    placeholder="Any characters will do..."
    class="border p-2 rounded mt-2"
    maxlength="20"
  />
  <!-- <a @click="query=''" class="ml-4 cursor-pointer text-indigo-600 text-sm" v-if="query.trim()">clear</a> -->
</template>

<script>
import { ref, watch } from 'vue'
import debounce from 'lodash/debounce'

export default {
  emits: ['search'],
  setup(_, { emit }) {
    const query = ref('')

    const debouncedEmit = debounce(
      value => emit('search', value.replace(/[^a-zA-Z0-9]/g, '')),
      300,
    )

    watch(query, newQuery => debouncedEmit(newQuery))

    return { query }
  },
}
</script>
