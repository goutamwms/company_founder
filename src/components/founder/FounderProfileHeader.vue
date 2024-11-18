<template>
  <div class="grid grid-cols-3 gap-4 items-center">
    <!-- Profile Image -->
    <div class="col-span-1">
      <img
        v-if="profilePicture"
        :src="profilePicture"
        alt="Founder"
        class="w-28 h-28 rounded-full object-cover mx-auto"
      />
    </div>
    <!-- Name and registration date -->
    <div class="col-span-2">
      <h1 class="text-3xl font-semibold">
        {{ profileName?.title }} {{ profileName?.first }}
        {{ profileName?.last }}
      </h1>
      <p class="font-medium">
        Joined: <span class="text-green-600">{{ formatDate(registered) }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { useCommon } from '@/hooks/useCommon'

export default {
  setup() {
    const { formatDate } = useCommon()
    return {
      formatDate,
    }
  },
  props: {
    profilePicture: String,
    profileName: Object,
    registered: String,
  },
}
</script>
