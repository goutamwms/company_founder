<template>
  <div class="mt-6 grid grid-cols-2 gap-4">
    <!-- Personal Info -->
    <div>
      <v-card>
        <template #title>Personal Info</template>
        <ul class="text-gray-700 mt-2 space-y-1 px-4">
          <li v-if="details?.dob">
            <strong>Date of Birth:</strong> {{ formatDate(details.dob.date) }}
          </li>
          <li v-if="details?.gender">
            <strong>Gender:</strong> {{ capitalizeFirstLetter(details.gender) }}
          </li>
          <li v-if="details?.login">
            <strong>Username:</strong> {{ details.login.username }}
          </li>
        </ul>
      </v-card>
    </div>
    <!-- Contact Details -->
    <div>
      <v-card>
        <template #title>Contact Details</template>
        <ul class="text-gray-700 mt-2 space-y-1 px-4">
          <li v-if="details?.email">
            <strong>Email:</strong> {{ details.email }}
          </li>
          <li v-if="details?.phone">
            <strong>Phone:</strong> {{ details.phone }}
          </li>
          <li v-if="details?.cell">
            <strong>Mobile:</strong> {{ details.cell }}
          </li>
        </ul>
      </v-card>
    </div>
  </div>

  <div class="mt-6 grid grid-cols-2 gap-4">
    <!-- Address -->
    <div>
      <v-card>
        <template #title>Address</template>
        <ul class="text-gray-700 mt-2 space-y-1 px-4">
          <li v-if="details?.location?.street">
            <strong>Street:</strong> {{ details?.location?.street.number }}
            {{ details?.location?.street.name }}
          </li>
          <li v-if="details?.location?.city">
            <strong>City:</strong> {{ details?.location.city }}
          </li>
          <li v-if="details?.location?.state">
            <strong>State:</strong> {{ details.location.state }}
          </li>
          <li v-if="details?.location?.country">
            <strong>Country:</strong> {{ details.location.country }}
          </li>
          <li v-if="details?.location?.postcode">
            <strong>Postcode:</strong> {{ details.location.postcode }}
          </li>
        </ul>
      </v-card>
    </div>

    <!-- Other -->
    <div>
      <v-card>
        <template #title>Other</template>
        <ul class="text-gray-700 mt-2 space-y-1 px-4">
          <li v-if="details?.location?.timezone?.description">
            <strong>Timezone:</strong>
            {{ details?.location.timezone.description }}
          </li>
          <li v-if="details?.location?.timezone?.offset">
            <strong>Offset:</strong> {{ details?.location.timezone.offset }}
          </li>
        </ul>
      </v-card>
    </div>
  </div>
</template>

<script>
import { useCommon } from '@/hooks/useCommon'
import VCard from '@/components/ui/Vcard.vue'

export default {
  setup() {
    const { capitalizeFirstLetter, formatDate } = useCommon()

    return {
      capitalizeFirstLetter,
      formatDate,
    }
  },
  props: {
    details: Object,
  },
  components: {
    VCard,
  },
  computed: {
    fullName() {
      return [...Object.values(this.details?.name)].filter(e => e).join(' ')
    },
  },
}
</script>
