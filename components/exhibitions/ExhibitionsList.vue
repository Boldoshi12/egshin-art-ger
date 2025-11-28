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
</template>
