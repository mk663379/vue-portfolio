<script setup lang="ts">
import AppModal from '@/components/modals/AppModal.vue'

import { useModalManagerStore } from '@/stores/modalManager'

const manager = useModalManagerStore()
</script>

<template>
  <AppModal v-model="manager.modals['featureSettings']" width="500">
    <template #title>
      <div class="d-flex justify-space-between align-center">
        <div class="text-h5 text-medium-emphasis ps-2">Invite John to connect</div>
        <v-btn icon="mdi-close" variant="text" @click="manager.hide('featureSettings')"></v-btn>
      </div>
    </template>
    <template #text>
      <div class="text-medium-emphasis mb-4">
        Invite collaborators to your network and grow your connections.
      </div>

      <div class="mb-2">Message (optional)</div>

      <v-textarea
        :counter="300"
        class="mb-2"
        rows="2"
        variant="outlined"
        persistent-counter
      ></v-textarea>

      <div class="text-overline mb-2">💎 PREMIUM</div>

      <div class="text-medium-emphasis mb-1">
        Share with unlimited people and get more insights about your network. Try Premium Free for
        30 days.
      </div>

      <v-btn
        class="text-none font-weight-bold ms-n4"
        color="primary"
        text="Retry Premium Free"
        variant="text"
      ></v-btn>
    </template>
    <template #actions>
      <v-btn
        class="text-none"
        rounded="xl"
        text="Cancel"
        @click="manager.hide('featureSettings')"
      ></v-btn>

      <v-btn
        class="text-none"
        color="primary"
        rounded="xl"
        text="Send"
        variant="flat"
        @click="manager.hide('featureSettings')"
      ></v-btn>
    </template>
  </AppModal>
</template>
