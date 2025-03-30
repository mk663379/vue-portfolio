<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ja } from 'date-fns/locale'

const { format = 'yyyy/MM/dd', teleport = true } = defineProps<{
  format?: string
  teleport?: boolean
}>()

const date = defineModel<string[]>('date')
</script>

<template>
  <VueDatePicker
    ref="datepicker"
    v-model="date"
    range
    multi-calendars
    :format-locale="ja"
    :format="format"
    :model-type="format"
    :text-input="{ format }"
    :teleport="teleport"
    :enable-time-picker="false"
    select-text="選択"
    cancel-text="取消"
  >
  </VueDatePicker>
</template>
