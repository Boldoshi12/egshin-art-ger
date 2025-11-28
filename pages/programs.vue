<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-slate-50 relative overflow-hidden">
    <!-- Background doodles -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]">
       <div class="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]"></div>
    </div>
    
    <!-- Playful blobs background -->
    <div class="absolute top-40 left-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
    <div class="absolute top-60 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    <div class="absolute bottom-40 left-1/3 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

    <ProgramsHeader />
    <ProgramsGrid />
  </div>
</template>