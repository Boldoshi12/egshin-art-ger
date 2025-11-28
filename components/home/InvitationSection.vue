<script setup lang="ts">
import { APP_DATA } from '~/utils/constants'
import { Palette, Brush, Heart, Star } from 'lucide-vue-next'
</script>

<template>
    <section class="py-24 bg-slate-900 text-white relative overflow-hidden">
         <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')]"></div>
        
        <!-- Top Wavy Border -->
         <div class="absolute top-0 left-0 right-0 h-10 bg-white" style="clip-path: polygon(0 0, 100% 0, 100% 30%, 0 100%)"></div>

        <div class="max-w-5xl mx-auto px-4 relative z-10 mt-10">
          <FadeInSection>
              <div class="text-center mb-16">
                  <h3 class="text-4xl md:text-5xl font-black display-font mb-4 text-white">
                      <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-sky-300">
                          Хүүхдийн ертөнц
                      </span>
                  </h3>
                  <p class="text-slate-400 text-lg font-bold">Бүтээлч аялалдаа бэлэн үү?</p>
              </div>

              <div class="grid gap-8 md:grid-cols-3 mb-20">
                  <div v-for="(text, idx) in APP_DATA.invitation" :key="idx" class="group bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border-2 border-slate-700 hover:border-white transition-all duration-300 hover:-translate-y-2 relative">
                      <div 
                          class="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black transform rotate-3 group-hover:rotate-12 transition-transform duration-300"
                          :class="idx === 0 ? 'bg-rose-500 text-white' : idx === 1 ? 'bg-sky-500 text-white' : 'bg-lime-500 text-white'"
                      >
                          <Palette v-if="idx === 0" :size="32"/>
                          <Brush v-else-if="idx === 1" :size="32"/>
                          <Heart v-else :size="32"/>
                      </div>
                      <p class="font-bold text-lg text-slate-200 text-center leading-relaxed">{{ text }}</p>
                      <!-- Pin icon -->
                      <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 shadow-sm border border-red-700"></div>
                  </div>
              </div>

              <!-- Big Welcome Message -->
              <div class="text-center relative">
                  <div class="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
                       <div class="w-[600px] h-[200px] bg-gradient-to-r from-rose-500 via-amber-500 to-sky-500 blur-3xl rounded-full"></div>
                  </div>
                  <h2 class="text-5xl md:text-7xl font-black text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] transform -rotate-2 hover:rotate-2 transition-transform duration-500 cursor-default animate-pulse" style="font-family: 'Fredoka', sans-serif">
                      {{ APP_DATA.welcomeText }}
                  </h2>
                   <div class="mt-8 flex justify-center space-x-2">
                      <Star class="text-yellow-400 animate-spin-slow w-8 h-8" fill="currentColor" />
                      <Star class="text-rose-400 animate-bounce w-6 h-6 delay-100" fill="currentColor" />
                      <Star class="text-sky-400 animate-pulse w-8 h-8 delay-200" fill="currentColor" />
                   </div>
              </div>

          </FadeInSection>
        </div>
        
        <!-- Bottom Wavy Border -->
        <div class="absolute bottom-0 left-0 right-0 h-10 bg-amber-50" style="clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 70%)"></div>
    </section>
</template>
