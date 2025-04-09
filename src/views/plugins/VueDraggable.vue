<script setup lang="ts">
import { computed, ref } from 'vue'

import TheWrapper from '@/components/TheWrapper.vue'
import DraggableCustomDragPanel from '@/components/sections/plugins/DraggableCustomDragPanel.vue'
import DraggableMultiplePanel from '@/components/sections/plugins/DraggableMultiplePanel.vue'
import DraggableSinglePanel from '@/components/sections/plugins/DraggableSinglePanel.vue'
import DraggableTablePanel from '@/components/sections/plugins/DraggableTablePanel.vue'

const tab = ref<string>('')

const items = computed(() => [
  {
    component: DraggableSinglePanel,
    value: 'Single',
  },
  {
    component: DraggableMultiplePanel,
    value: 'Multiple',
  },
  {
    component: DraggableCustomDragPanel,
    value: 'Drag',
  },
  {
    component: DraggableTablePanel,
    value: 'Table',
  },
])
</script>

<template>
  <TheWrapper>
    <v-container fluid>
      <v-tabs v-model="tab" align-tabs="start">
        <v-tab
          v-for="(item, index) in items"
          :key="index"
          :value="item.value"
          :text="item.value"
          class="text-none"
        />
      </v-tabs>

      <v-tabs-window v-model="tab" class="bg-grey-darken-2">
        <v-tabs-window-item v-for="(item, index) in items" :key="index" :value="item.value">
          <component :is="item.component" />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-container>
  </TheWrapper>
</template>
