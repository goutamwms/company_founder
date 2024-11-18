<template>
  <div class="bg-gray-100 h-screen py-5 overflow-y-auto">
    <div class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div class="grid place-items-center">
        <img
          alt="Vue logo"
          src="./assets/briefcase.svg"
          height="50"
          width="50"
        />
        <h1>Information about company founders</h1>
      </div>
      <CompanyFounder />
    </div>
  </div>
</template>

<script>
import CompanyFounder from '@/components/CompanyFounder.vue'

export default {
  components: {
    CompanyFounder,
  },
}
</script>