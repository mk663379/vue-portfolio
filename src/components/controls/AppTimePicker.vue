<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ja } from 'date-fns/locale'

const { format = 'HH:mm', teleport = true } = defineProps<{
  format?: string
  teleport?: boolean
}>()

const date = defineModel<string>('date')
</script>

<template>
  <VueDatePicker
    v-model="date"
    time-picker
    :format-locale="ja"
    :format="format"
    :model-type="format"
    :text-input="{ format }"
    :teleport="teleport"
    select-text="選択"
    cancel-text="取消"
  >
  </VueDatePicker>
</template>
