<script setup lang="ts">
import home from '@/assets/home-img.jpg'
import TheWrapper from '@/components/TheWrapper.vue'
</script>

<template>
  <TheWrapper>
    <div class="wrapper">
      <v-img :src="home" />
    </div>
  </TheWrapper>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
}
</style>
