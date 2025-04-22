<script setup lang="ts">
import { onMounted, ref } from 'vue'
import draggableComponent from 'vuedraggable'

import { generateFakes } from '@/helpers/fakeHelpers'

import type { FakeUser } from '@/types/fakes'

const users = ref<FakeUser[]>([])

onMounted(() => {
  users.value = generateFakes('user', 5)
})
</script>

<template>
  <v-container fluid>
    <v-table class="bg-grey-darken-3">
      <thead class="bg-grey-darken-4">
        <tr>
          <th>氏名</th>
          <th>都道府県</th>
          <th>郵便番号</th>
        </tr>
      </thead>
      <draggableComponent
        v-model="users"
        tag="tbody"
        item-key="id"
        class="draggable-handle"
        ghost-class="draggable-ghost"
        animation="200"
      >
        <template #item="{ element }">
          <tr>
            <td>{{ element.name }}</td>
            <td>{{ element.state }}</td>
            <td>{{ element.zipCode }}</td>
          </tr>
        </template>
      </draggableComponent>
    </v-table>
  </v-container>
</template>
