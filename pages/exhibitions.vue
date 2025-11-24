<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { APP_DATA } from '~/utils/constants'
import { MapPin, Sparkles, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const currentSlides = ref<number[]>([0, 0])
let intervals: NodeJS.Timeout[] = []

const startAutoPlay = (exIndex: number, totalImages: number) => {
  intervals[exIndex] = setInterval(() => {
    currentSlides.value[exIndex] = (currentSlides.value[exIndex] + 1) % totalImages
  }, 3000)
}

const goToSlide = (exIndex: number, slideIndex: number) => {
  currentSlides.value[exIndex] = slideIndex
  clearInterval(intervals[exIndex])
  startAutoPlay(exIndex, APP_DATA.exhibitions.list[exIndex].images.length)
}

const nextSlide = (exIndex: number, totalImages: number) => {
  goToSlide(exIndex, (currentSlides.value[exIndex] + 1) % totalImages)
}

const prevSlide = (exIndex: number, totalImages: number) => {
  goToSlide(exIndex, (currentSlides.value[exIndex] - 1 + totalImages) % totalImages)
}

onMounted(() => {
  APP_DATA.exhibitions.list.forEach((ex, idx) => {
    startAutoPlay(idx, ex.images.length)
  })
})

onUnmounted(() => {
  intervals.forEach(interval => clearInterval(interval))
})
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

      <!-- Header -->
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

      <!-- Exhibitions -->
      <div class="max-w-7xl mx-auto px-4 pb-20 relative z-10">
          <div class="space-y-20">
              <FadeInSection v-for="(ex, idx) in APP_DATA.exhibitions.list" :key="idx">
                  <!-- Big colorful container -->
                  <div 
                    class="relative rounded-[3rem] p-8 md:p-12 shadow-2xl border-8"
                    :style="{
                      background: idx === 0 
                        ? 'linear-gradient(135deg, #fef3c7 0%, #fcd34d 50%, #f59e0b 100%)'
                        : 'linear-gradient(135deg, #ddd6fe 0%, #c4b5fd 50%, #a78bfa 100%)'
                    }"
                    :class="idx === 0 ? 'border-yellow-400' : 'border-purple-400'"
                  >
                      <!-- Floating decorations -->
                      <div class="absolute -top-8 left-8 text-7xl transform -rotate-12">
                          {{ idx === 0 ? '🐴' : '🚀' }}
                      </div>
                      <div class="absolute -top-8 right-8 text-7xl transform rotate-12">
                          {{ idx === 0 ? '🎭' : '🌟' }}
                      </div>
                      
                      <!-- Year badge -->
                      <div 
                        class="absolute -top-12 left-1/2 -translate-x-1/2 px-8 py-4 rounded-full font-black text-4xl shadow-2xl border-8 border-white transform -rotate-6"
                        :class="idx === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' : 'bg-gradient-to-r from-purple-400 to-pink-500 text-white'"
                      >
                          {{ ex.year }} он 🎉
                      </div>
                      
                      <div class="mt-8">
                          <!-- Title section -->
                          <div class="text-center mb-8">
                              <div class="inline-flex items-center gap-2 bg-white/60 backdrop-blur px-6 py-3 rounded-full mb-4 shadow-lg">
                                  <Sparkles :size="24" :class="idx === 0 ? 'text-yellow-600' : 'text-purple-600'" />
                                  <span class="font-black text-xl uppercase" :class="idx === 0 ? 'text-yellow-700' : 'text-purple-700'">
                                      Онцлох Үзэсгэлэн
                                  </span>
                              </div>
                              
                              <h2 class="text-4xl md:text-6xl font-black display-font mb-4 text-white drop-shadow-lg">
                                  {{ ex.title }}
                              </h2>
                              
                              <div class="inline-flex items-center gap-3 bg-white/70 backdrop-blur px-6 py-3 rounded-full shadow-lg">
                                  <MapPin :size="24" :class="idx === 0 ? 'text-yellow-600' : 'text-purple-600'" />
                                  <span class="font-black text-xl" :class="idx === 0 ? 'text-yellow-800' : 'text-purple-800'">
                                      {{ ex.location }}
                                  </span>
                              </div>
                          </div>
                          
                          <!-- Image gallery section -->
                          <div class="grid md:grid-cols-2 gap-8 items-start">
                              <!-- Images -->
                              <div class="relative group order-2 md:order-1">
                                  <!-- Fun frame -->
                                  <div class="bg-white p-6 rounded-3xl shadow-2xl border-8 border-white transform hover:scale-105 transition-transform">
                                      <!-- Image container -->
                                      <div class="relative h-[450px] bg-slate-100 rounded-2xl overflow-hidden">
                                          <img 
                                              v-for="(image, imgIdx) in ex.images" 
                                              :key="imgIdx"
                                              :src="image" 
                                              :alt="`${ex.title} - ${imgIdx + 1}`" 
                                              class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700"
                                              :class="currentSlides[idx] === imgIdx ? 'opacity-100' : 'opacity-0'"
                                          />
                                          
                                          <!-- Fun navigation buttons -->
                                          <button 
                                              @click="prevSlide(idx, ex.images.length)"
                                              class="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110 border-4 border-white"
                                              :class="idx === 0 ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-500' : 'bg-purple-400 text-purple-900 hover:bg-purple-500'"
                                          >
                                              <ChevronLeft :size="32" class="font-black" />
                                          </button>
                                          <button 
                                              @click="nextSlide(idx, ex.images.length)"
                                              class="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110 border-4 border-white"
                                              :class="idx === 0 ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-500' : 'bg-purple-400 text-purple-900 hover:bg-purple-500'"
                                          >
                                              <ChevronRight :size="32" class="font-black" />
                                          </button>
                                      </div>
                                      
                                      <!-- Dots -->
                                      <div class="flex justify-center gap-3 mt-6">
                                          <button
                                              v-for="(image, dotIdx) in ex.images"
                                              :key="dotIdx"
                                              @click="goToSlide(idx, dotIdx)"
                                              class="transition-all rounded-full border-4 border-white shadow-lg"
                                              :class="currentSlides[idx] === dotIdx ? 'w-12 h-4' : 'w-4 h-4 hover:scale-125'"
                                              :style="{
                                                background: currentSlides[idx] === dotIdx 
                                                  ? (idx === 0 ? '#fbbf24' : '#a78bfa')
                                                  : '#e5e7eb'
                                              }"
                                          ></button>
                                      </div>
                                  </div>
                              </div>
                              
                              <!-- Description -->
                              <div class="bg-white/70 backdrop-blur rounded-3xl p-8 shadow-xl border-4 order-1 md:order-2"
                                   :class="idx === 0 ? 'border-yellow-300' : 'border-purple-300'"
                              >
                                  <div class="text-6xl mb-6 text-center">
                                      {{ idx === 0 ? '🏛️' : '🎪' }}
                                  </div>
                                  
                                  <h3 class="text-2xl font-black mb-6 text-center" 
                                      :class="idx === 0 ? 'text-yellow-800' : 'text-purple-800'"
                                  >
                                      Үзэсгэлэнгийн тухай 📖
                                  </h3>
                                  
                                  <p class="text-slate-700 text-xl leading-relaxed font-bold">
                                      {{ ex.description }}
                                  </p>
                                  
                                  <!-- Fun decorative elements -->
                                  <div class="flex justify-center gap-4 mt-8">
                                      <div class="text-5xl">✨</div>
                                      <div class="text-5xl">🎨</div>
                                      <div class="text-5xl">🌈</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </FadeInSection>
          </div>
      </div>
  </div>
</template>

<style scoped>
.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}
</style>