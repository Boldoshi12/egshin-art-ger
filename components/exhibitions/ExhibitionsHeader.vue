<script setup lang="ts">
import { APP_DATA } from '~/utils/constants'
import { Sparkles } from 'lucide-vue-next'
</script>

<template>
    <div class="relative py-24 overflow-hidden bg-gradient-to-br from-amber-400 via-rose-500 to-purple-500">
        <!-- Pattern like home page -->
        <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <!-- Floating decorative elements like home page -->
        <div class="absolute top-10 left-10 w-20 h-20 bg-white rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black transform rotate-12 flex items-center justify-center animate-bounce">
            <span class="text-4xl">🎨</span>
        </div>
        <div class="absolute bottom-20 right-20 text-6xl animate-float">🖼️</div>
        <div class="absolute top-1/3 right-10 text-4xl animate-pulse">⭐</div>
        <div class="absolute bottom-1/3 left-20 text-3xl animate-bounce animation-delay-400">✨</div>
        
        <div class="relative z-10 text-center px-4">
            <div class="inline-block px-6 py-3 bg-white rounded-full mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black transform -rotate-2 hover:rotate-2 transition-transform">
                <span class="font-black text-slate-800 tracking-wider uppercase flex items-center">
                    <Sparkles class="w-5 h-5 text-amber-500 mr-2" /> ҮЗЭСГЭЛЭН
                </span>
            </div>
            
            <h1 class="text-5xl md:text-7xl font-black display-font mb-2 text-white drop-shadow-lg relative inline-block">
                Бүтээлийн үзэсгэлэн
                <!-- Squiggly underline like home page -->
                <svg class="absolute w-full h-6 -bottom-2 left-0 text-yellow-300 -z-10" viewBox="0 0 100 15" preserveAspectRatio="none">
                    <path d="M0 5 Q 15 15 30 5 T 60 5 T 90 5 T 100 10" stroke="currentColor" stroke-width="8" fill="none" stroke-linecap="round" />
                </svg>
            </h1>
            
            <div class="max-w-4xl mx-auto bg-white p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-8">
                <p class="text-slate-800 text-xl font-bold leading-relaxed">
                    {{ APP_DATA.exhibitions.intro }}
                </p>
            </div>
        </div>
        
        <!-- Paper edge bottom like home page -->
        <div class="absolute bottom-0 left-0 right-0 h-16 bg-white paper-edge-top"></div>
    </div>
</template>

<style scoped>
.animation-delay-400 {
  animation-delay: 0.4s;
}
</style>
