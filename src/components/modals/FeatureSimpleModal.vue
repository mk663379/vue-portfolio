<script setup lang="ts">
import AppModal from '@/components/modals/AppModal.vue'

import { useModalManagerStore } from '@/stores/modalManager'

const manager = useModalManagerStore()
</script>

<template>
  <AppModal v-model="manager.modals['featureSimple']">
    <template #text>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
    </template>
  </AppModal>
</template>
