<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-purple-50 relative overflow-hidden">
      <!-- Animated Background Blobs -->
      <div class="absolute top-20 left-10 w-64 h-64 bg-violet-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
      <div class="absolute top-40 right-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div>
      
      <!-- Floating Decorative Elements -->
      <div class="absolute top-32 right-1/4 text-6xl animate-float opacity-40">🎨</div>
      <div class="absolute bottom-1/4 left-1/4 text-5xl animate-float animation-delay-1000 opacity-40">✨</div>
      <div class="absolute top-1/3 left-1/3 text-4xl animate-float animation-delay-2000 opacity-40">🌟</div>
      <div class="absolute bottom-1/3 right-1/3 text-5xl animate-float animation-delay-3000 opacity-40">🎭</div>

      <ProjectsHeader />
      <ProjectsContent />
  </div>
</template>
