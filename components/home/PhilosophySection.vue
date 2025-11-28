<script setup lang="ts">
import { APP_DATA } from '~/utils/constants'
</script>

<template>
    <section class="py-24 px-4 bg-amber-50 relative overflow-hidden">
        <!-- Decorative blobs -->
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy-dark.png')] opacity-[0.03]"></div>

        <div class="max-w-7xl mx-auto relative z-10">
            <FadeInSection>
              <div class="text-center mb-16">
                  <h2 class="text-4xl md:text-5xl font-black text-slate-800 display-font">Бидний философи</h2>
                  <div class="w-32 h-3 bg-rose-400 mx-auto mt-4 rounded-full rotate-1"></div>
              </div>
              
              <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                  <div 
                    v-for="(quote, idx) in APP_DATA.philosophy" 
                    :key="idx" 
                    class="break-inside-avoid p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10 relative border-2 border-dashed"
                    :class="[
                      ['bg-yellow-100', 'bg-sky-100', 'bg-rose-100', 'bg-lime-100', 'bg-violet-100'][idx % 5],
                      idx % 2 === 0 ? 'rotate-1' : '-rotate-1',
                      'hover:rotate-0',
                      ['border-yellow-200', 'border-sky-200', 'border-rose-200', 'border-lime-200', 'border-violet-200'][idx % 5]
                    ]"
                  >
                      <!-- Tape effect -->
                      <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/40 backdrop-blur-sm shadow-sm rotate-2 border border-white/50"></div>
                      
                      <div class="text-4xl text-slate-800/10 display-font font-black absolute top-4 left-4">“</div>
                      <p class="text-slate-800 font-bold text-lg relative z-10 font-handwriting leading-relaxed pt-2">
                          {{ quote }}
                      </p>
                  </div>
              </div>
            </FadeInSection>
        </div>
    </section>
</template>
