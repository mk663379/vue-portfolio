<script setup lang="ts">
import { watch } from 'vue'

const opened = defineModel<string[]>('opened', { default: [] })

watch(opened, (newValue) => {
  if (newValue.length > 1) {
    opened.value = [newValue.at(-1) ?? '']
  }
})
</script>

<template>
  <v-list v-model:opened="opened">
    <v-list-item title="Home" value="Home" prepend-icon="mdi-home"></v-list-item>

    <v-list-group value="Vue">
      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props" title="Vue" prepend-icon="mdi-vuejs"></v-list-item>
      </template>
    </v-list-group>

    <v-list-group value="Plugins">
      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props" title="Plugins" prepend-icon="mdi-power-plug"></v-list-item>
      </template>
    </v-list-group>
  </v-list>
</template>
