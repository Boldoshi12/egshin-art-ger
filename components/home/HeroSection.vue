<script setup lang="ts">
import { APP_DATA } from '~/utils/constants'
import { Palette, Brush, Cloud, Sun, Smile } from 'lucide-vue-next'
</script>

<template>
    <section class="relative min-h-[90vh] flex items-center justify-center pt-24 pb-32 overflow-hidden">
      <!-- Animated Drawing Background Elements -->
      <div class="absolute inset-0 pointer-events-none">
          <!-- Sun -->
          <div class="absolute top-10 right-10 md:top-20 md:right-20 animate-[spin_20s_linear_infinite]">
               <Sun class="w-24 h-24 md:w-32 md:h-32 text-amber-400 fill-amber-200" :stroke-width="1.5" />
          </div>
          <!-- Clouds -->
          <div class="absolute top-32 left-10 md:left-40 animate-[bounce_5s_ease-in-out_infinite]">
               <Cloud class="w-20 h-20 text-sky-300 fill-sky-100" />
          </div>
          <div class="absolute top-20 left-[60%] animate-[bounce_7s_ease-in-out_infinite_1s]">
               <Cloud class="w-16 h-16 text-sky-200 fill-white" />
          </div>
          <!-- Scribbles -->
          <svg class="absolute bottom-20 left-10 w-40 h-40 text-rose-300 opacity-50 animate-pulse" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10,90 Q30,10 50,90 T90,10" />
          </svg>
           <svg class="absolute top-1/2 right-10 w-32 h-32 text-lime-300 opacity-50 animate-bounce" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="50" cy="50" r="40" stroke-dasharray="5,5" />
          </svg>
      </div>

      <div class="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="text-center md:text-left animate-[fadeInLeft_1s_ease-out]">
              <div class="inline-block px-4 py-2 bg-white border-2 border-slate-800 rounded-full mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] hover:rotate-2 transition-transform">
                  <span class="font-bold text-slate-800 tracking-wider uppercase flex items-center">
                      <Smile class="w-5 h-5 text-amber-500 mr-2" /> {{ APP_DATA.hero.subtitle }}
                  </span>
              </div>
              
              <h1 class="text-5xl md:text-7xl font-black mb-6 text-slate-800 leading-tight display-font relative">
                  <span class="relative inline-block z-10 drop-shadow-sm">
                      {{ APP_DATA.hero.title }}
                      <!-- Underline squiggly -->
                      <svg class="absolute w-full h-6 -bottom-2 left-0 text-amber-400 -z-10" viewBox="0 0 100 15" preserveAspectRatio="none">
                          <path d="M0 5 Q 15 15 30 5 T 60 5 T 90 5 T 100 10" stroke="currentColor" stroke-width="8" fill="none" stroke-linecap="round" />
                      </svg>
                  </span>
              </h1>
              
              <p class="text-xl md:text-2xl mb-10 font-bold text-slate-600 max-w-lg mx-auto md:mx-0 leading-relaxed font-handwriting">
                  "{{ APP_DATA.hero.slogan }}"
              </p>
              
              <div class="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                  <NuxtLink to="/programs" class="group relative px-8 py-4 bg-rose-500 text-white rounded-2xl font-black text-xl transition-all hover:-translate-y-1 hover:shadow-[0_8px_0px_0px_#be123c] border-2 border-slate-900 shadow-[0_4px_0px_0px_#1e293b] active:shadow-none active:translate-y-1 flex items-center justify-center">
                      <Palette class="mr-2 w-6 h-6"/> Хөтөлбөрүүд 
                  </NuxtLink>
                  <NuxtLink to="/contact" class="px-8 py-4 bg-yellow-400 text-slate-900 rounded-2xl font-black text-xl transition-all hover:-translate-y-1 border-2 border-slate-900 shadow-[0_4px_0px_0px_#1e293b] active:shadow-none active:translate-y-1 flex items-center justify-center hover:bg-yellow-300">
                      Бидэнтэй холбогдох
                  </NuxtLink>
              </div>
          </div>

          <!-- Hero Image Collage -->
          <div class="relative hidden md:block animate-[fadeInRight_1s_ease-out]">
              <div class="relative w-full aspect-square perspective-1000">
                  <!-- Main Image -->
                  <div class="absolute inset-4 z-20 transition-transform duration-500 hover:scale-105">
                       <div class="w-full h-full bg-white p-4 rounded-[2rem] shadow-2xl rotate-2 border-4 border-slate-800 overflow-hidden relative group">
                           <img src="/images/egshinmain.png" alt="Kids Art" class="w-full h-full object-cover rounded-[1.5rem]" />
                           <!-- Tape -->
                           <div class="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-rose-200/90 shadow-sm rotate-[-2deg]"></div>
                       </div>
                  </div>
                  <!-- Decorative Elements -->
                  <div class="absolute -top-6 right-12 z-30 w-28 h-28 bg-yellow-300 rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black animate-bounce">
                      <Palette class="w-14 h-14 text-slate-800" />
                  </div>
                  <div class="absolute bottom-12 -left-8 z-30 w-24 h-24 bg-sky-300 rounded-[20px] -rotate-12 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
                      <Brush class="w-12 h-12 text-slate-800" />
                  </div>
                  <!-- Background blob -->
                  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl -z-10"></div>
              </div>
          </div>
      </div>

      <!-- Paper Edge Bottom -->
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-white paper-edge-top transform rotate-180 z-20"></div>
    </section>
</template>
