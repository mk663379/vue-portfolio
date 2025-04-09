<script setup lang="ts">
import { onMounted, ref } from 'vue'
import draggableComponent from 'vuedraggable'

import { makeFakeUsers } from '@/helpers/fakeHelpers'

import type { FakeUser } from '@/types/fakes'

const users = ref<FakeUser[]>([])

onMounted(() => {
  users.value = makeFakeUsers(5)
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <div class="h-4">Group1</div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <draggableComponent
          v-model="users"
          item-key="id"
          class="draggable-handle"
          ghost-class="draggable-ghost"
          animation="200"
        >
          <template #item="{ element }">
            <v-card :title="element.name" prepend-icon="mdi-account" class="mt-4 mb-4">
              <v-card-item>
                <p>都道府県: {{ element.state }}</p>
                <p>郵便番号: {{ element.zipCode ?? '' }}</p>
              </v-card-item>
            </v-card>
          </template>
        </draggableComponent>
      </v-col>
    </v-row>
  </v-container>
</template>
