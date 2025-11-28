<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-white">
      <!-- Colorful confetti background -->
      <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-10 left-10 w-8 h-8 bg-red-400 rounded-full opacity-60"></div>
          <div class="absolute top-20 right-20 w-6 h-6 bg-yellow-400 rounded-full opacity-60"></div>
          <div class="absolute top-40 left-1/4 w-10 h-10 bg-blue-400 rounded-full opacity-60"></div>
          <div class="absolute top-60 right-1/3 w-7 h-7 bg-green-400 rounded-full opacity-60"></div>
          <div class="absolute bottom-40 left-1/3 w-9 h-9 bg-purple-400 rounded-full opacity-60"></div>
          <div class="absolute bottom-20 right-1/4 w-8 h-8 bg-pink-400 rounded-full opacity-60"></div>
      </div>

      <ExhibitionsHeader />
      <ExhibitionsList />
  </div>
</template>