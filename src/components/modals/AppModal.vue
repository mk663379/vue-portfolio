<script setup lang="ts">
const { width = '400' } = defineProps<{
  width?: string
}>()

const status = defineModel<boolean>({ default: false })
</script>

<template>
  <v-dialog v-model="status" width="auto">
    <v-card :width="width">
      <v-card-title v-if="$slots.title">
        <slot name="title"></slot>
      </v-card-title>

      <v-card-text>
        <slot name="text"></slot>
      </v-card-text>

      <v-card-actions v-if="$slots.actions">
        <slot name="actions"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
