<template>
  <div class="min-h-screen flex flex-col bg-surface-900">
    <TheNavbar />
    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<style>
.page-enter-active {
  animation: fadeSlideIn 0.4s ease forwards;
}
.page-leave-active {
  animation: fadeSlideOut 0.2s ease forwards;
}

@keyframes fadeSlideIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeSlideOut {
  from { opacity: 1; }
  to   { opacity: 0; }
}
</style>
