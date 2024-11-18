<template>
  <section class="card">
    <h2 class="text-lg font-semibold bg-green-700 text-white p-2 rounded-md">
      <slot name="title"></slot>
    </h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'VCard',
  props: {
    title: {
      type: String,
    },
  },
}
</script>
