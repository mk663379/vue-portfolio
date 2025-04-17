<script setup lang="ts">
import TheWrapper from '@/components/TheWrapper.vue'
import FeatureSettingModal from '@/components/modals/FeatureSettingModal.vue'
import FeatureSimpleModal from '@/components/modals/FeatureSimpleModal.vue'

import { useModalManagerStore } from '@/stores/modalManager'

const manager = useModalManagerStore()
</script>

<template>
  <TheWrapper>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-btn rounded="xs" @click="manager.show('featureSimple')" class="text-none"
            >Simple</v-btn
          >
        </v-col>
        <v-col cols="auto">
          <v-btn
            rounded="xs"
            prepend-icon="mdi-cog"
            @click="manager.show('featureSettings')"
            class="text-none"
            >Settings</v-btn
          >
        </v-col>
      </v-row>
    </v-container>

    <!-- modals -->
    <FeatureSimpleModal />
    <FeatureSettingModal />
  </TheWrapper>
</template>
