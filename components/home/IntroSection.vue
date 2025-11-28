<script setup lang="ts">
import { APP_DATA } from '~/utils/constants'
import { Cloud, Star } from 'lucide-vue-next'
</script>

<template>
    <section class="py-24 px-4 bg-white relative">
      <div class="max-w-6xl mx-auto">
          <FadeInSection>
              <div class="grid md:grid-cols-2 gap-16 items-center">
                  <div class="order-2 md:order-1 relative">
                      <!-- Photo Frame Effect -->
                      <div class="relative bg-white p-4 shadow-xl rotate-[-2deg] transition-transform hover:rotate-0 duration-500 z-10 border-2 border-slate-200 rounded-xl">
                          <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-sky-200/80 transform -rotate-1 opacity-80 shadow-sm"></div> <!-- Tape -->
                          <img 
                              src="/images/egshin-main-2.jpg" 
                              alt="Art Class" 
                              class="w-full h-[400px] object-cover rounded-lg"
                          />
                           <div class="pt-4 text-center font-handwriting text-slate-600 font-bold text-xl transform rotate-1">
                               Бүтээлч цаг хугацаа... 🎨
                           </div>
                      </div>
                       <!-- Background Doodles -->
                      <div class="absolute -bottom-10 -left-10 w-40 h-40 text-rose-200 opacity-60 z-0">
                           <svg viewBox="0 0 100 100" fill="currentColor"><path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 80c-16.6 0-30-13.4-30-30s13.4-30 30-30 30 13.4 30 30-13.4 30-30 30z"/></svg>
                      </div>
                  </div>

                  <div class="order-1 md:order-2">
                      <div class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-black text-sm mb-6 border-2 border-green-200 transform -rotate-2">
                          👋 БИДНИЙ ТУХАЙ
                      </div>
                      <h2 class="text-4xl md:text-5xl font-black text-slate-800 mb-8 display-font">
                          {{ APP_DATA.intro.title }}
                          <span class="block h-4 bg-green-300 mt-[-14px] opacity-40 rounded-full w-2/3 ml-4 transform -rotate-1"></span>
                      </h2>
                      
                      <div class="bg-sky-50 p-8 rounded-[2rem] border-4 border-dashed border-sky-200 relative mb-8">
                          <div class="space-y-4 text-slate-700 text-lg leading-relaxed font-bold font-nunito">
                              <p v-for="(p, idx) in APP_DATA.intro.content" :key="idx">{{ p }}</p>
                          </div>
                      </div>

                      <ul class="space-y-4">
                          <li v-for="(item, idx) in APP_DATA.intro.highlights" :key="idx" class="flex items-center bg-white p-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] border-2 border-slate-100 hover:border-amber-300 hover:bg-amber-50 transition-all hover:-translate-x-1">
                              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center mr-4 text-white font-black shadow-sm border-2 border-amber-500">
                                  {{ idx + 1 }}
                              </div>
                              <span class="text-slate-700 font-bold text-lg">{{ item }}</span>
                          </li>
                      </ul>
                  </div>
              </div>

              <div class="mt-20 p-10 bg-violet-100 rounded-[3rem] border-4 border-dashed border-violet-300 text-center relative overflow-hidden group hover:bg-violet-200 transition-colors">
                   <div class="absolute -top-4 -right-4 text-violet-300 transform rotate-12">
                      <Cloud :size="120" fill="currentColor" />
                   </div>
                   <div class="absolute bottom-4 left-4 text-violet-300 transform -rotate-12">
                      <Star :size="60" fill="currentColor" />
                   </div>
                   <p class="text-xl md:text-2xl font-black text-violet-800 italic relative z-10 leading-relaxed font-fredoka">
                      "{{ APP_DATA.intro.closing }}"
                   </p>
              </div>
          </FadeInSection>
      </div>
    </section>
</template>
