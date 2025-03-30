<script setup lang="ts">
import { watch } from 'vue'

import type { Navigation } from '@/types/navigation'

const opened = defineModel<string[]>('opened', { default: [] })

watch(opened, (newValue) => {
  if (newValue.length > 1) {
    opened.value = [newValue.at(-1) ?? '']
  }
})

const plugins: Navigation[] = [{ title: 'VueDatePicker', to: '/plugins/dates' }]
</script>

<template>
  <v-list v-model:opened="opened">
    <v-list-item title="Home" value="Home" prepend-icon="mdi-home" to="/"></v-list-item>

    <v-list-group value="Vue">
      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props" title="Vue" prepend-icon="mdi-vuejs"></v-list-item>
      </template>
    </v-list-group>

    <v-list-group value="Plugins">
      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props" title="Plugins" prepend-icon="mdi-power-plug"></v-list-item>
      </template>

      <v-list-item
        v-for="(plugin, i) in plugins"
        :key="i"
        :title="plugin.title"
        :value="plugin.title"
        :to="plugin.to"
      ></v-list-item>
    </v-list-group>
  </v-list>
</template>
