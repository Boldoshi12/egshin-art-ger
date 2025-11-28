<script setup lang="ts">
import { Sparkles, Palette } from 'lucide-vue-next'
</script>

<template>
    <div class="relative py-24 overflow-hidden bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-500">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
      
      <!-- Floating decorative elements like home page -->
      <div class="absolute top-10 left-10 w-20 h-20 bg-white rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black transform rotate-12 flex items-center justify-center animate-bounce">
          <Palette :size="32" class="text-cyan-500" />
      </div>
      <div class="absolute bottom-20 right-20 text-6xl animate-float">🎨</div>
      <div class="absolute top-1/3 right-10 text-4xl animate-pulse">📚</div>
      <div class="absolute bottom-1/3 left-20 text-3xl animate-bounce animation-delay-400">✨</div>
      
      <div class="relative z-10 px-4 text-center text-white">
          <div class="inline-block px-6 py-3 bg-white rounded-full mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black transform -rotate-2 hover:rotate-2 transition-transform">
              <span class="font-black text-slate-800 tracking-wider uppercase flex items-center">
                  <Sparkles class="w-5 h-5 text-cyan-500 mr-2" /> СУРАЛЦАХ & БҮТЭЭХ
              </span>
          </div>
          
          <h1 class="text-5xl md:text-7xl font-black display-font mb-2 drop-shadow-lg relative inline-block">
              Сургалтын хөтөлбөрүүд
              <!-- Squiggly underline like home page -->
              <svg class="absolute w-full h-6 -bottom-2 left-0 text-yellow-300 -z-10" viewBox="0 0 100 15" preserveAspectRatio="none">
                  <path d="M0 5 Q 15 15 30 5 T 60 5 T 90 5 T 100 10" stroke="currentColor" stroke-width="8" fill="none" stroke-linecap="round" />
              </svg>
          </h1>
          
          <p class="text-xl md:text-2xl font-bold text-white/90 max-w-2xl mx-auto mt-6">
              Хүүхдийн нас сэтгэл зүйн онцлогт тохирсон олон төрлийн бүтээлч хөтөлбөрүүд
          </p>
      </div>
      
      <!-- Paper edge bottom like home page -->
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-slate-50 paper-edge-top"></div>
    </div>
</template>
