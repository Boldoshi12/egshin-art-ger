<script setup lang="ts">
import { APP_DATA } from '~/utils/constants'
import { Star, Palette, Brush, Scissors, PenTool } from 'lucide-vue-next'

// Define a set of diverse card styles
const cardStyles = [
  {
    id: 'tape-rose',
    wrapperClass: 'rotate-1 hover:rotate-0 bg-rose-50 border-2 border-rose-100',
    tapeColor: 'bg-rose-300/60',
    tapeRotation: '-rotate-2',
    titleColor: 'text-rose-600',
    type: 'tape'
  },
  {
    id: 'pin-sky',
    wrapperClass: '-rotate-1 hover:rotate-0 bg-sky-50 border-2 border-sky-100',
    pinColor: 'bg-red-500',
    titleColor: 'text-sky-600',
    type: 'pin'
  },
  {
    id: 'clip-amber',
    wrapperClass: 'rotate-2 hover:rotate-0 bg-amber-50 border-t-[12px] border-amber-300',
    clipColor: 'bg-slate-700',
    titleColor: 'text-amber-700',
    type: 'clipboard'
  },
  {
    id: 'sticker-lime',
    wrapperClass: '-rotate-2 hover:rotate-0 bg-white border-2 border-dashed border-lime-300 shadow-[8px_8px_0_0_#bef264]',
    titleColor: 'text-lime-700',
    type: 'sticker'
  },
  {
    id: 'frame-violet',
    wrapperClass: 'rotate-0 hover:-translate-y-2 bg-violet-50 border-4 border-violet-200 rounded-none',
    titleColor: 'text-violet-700',
    type: 'frame'
  }
]
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 -mt-10 pb-20 relative z-20">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 gap-y-16">
          <FadeInSection 
            v-for="(prog, idx) in APP_DATA.programs" 
            :key="idx" 
            :delay="`${(idx % 3) * 100}ms`"
            :class="[
              idx === 0 ? 'md:col-span-8' : 
              idx === 1 ? 'md:col-span-4 md:mt-20' : 
              idx === 2 ? 'md:col-span-4' : 
              idx === 3 ? 'md:col-span-4 md:mt-12' : 
              idx === 4 ? 'md:col-span-4' : 
              'md:col-span-6'
            ]"
          >
              <div 
                class="group relative p-6 pb-8 shadow-lg transition-all duration-500 ease-out transform hover:z-10 hover:shadow-2xl h-full flex flex-col"
                :class="cardStyles[idx % cardStyles.length].wrapperClass"
              >
                  
                  <!-- Style Specific Decorations -->
                  <div v-if="cardStyles[idx % cardStyles.length].type === 'tape'" :class="['absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-8 backdrop-blur-sm transform shadow-sm z-10', cardStyles[idx % cardStyles.length].tapeColor, cardStyles[idx % cardStyles.length].tapeRotation]"></div>
                  
                  <div v-if="cardStyles[idx % cardStyles.length].type === 'pin'" :class="['absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full shadow-md border border-red-700 z-10', cardStyles[idx % cardStyles.length].pinColor]"></div>

                  <div v-if="cardStyles[idx % cardStyles.length].type === 'clipboard'" class="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-8 bg-slate-700 rounded-t-lg z-10 flex items-center justify-center">
                       <div class="w-16 h-1 bg-slate-500 rounded-full"></div>
                   </div>

                  <!-- Decorations based on ID -->
                  <Palette v-if="cardStyles[idx % cardStyles.length].type === 'tape'" class="absolute -bottom-4 -right-4 w-12 h-12 text-rose-200" />
                  <Brush v-if="cardStyles[idx % cardStyles.length].type === 'pin'" class="absolute -top-4 -left-4 w-10 h-10 text-sky-200 transform rotate-45" />
                  <Star v-if="cardStyles[idx % cardStyles.length].type === 'clipboard'" class="absolute bottom-4 left-4 w-8 h-8 text-amber-300 fill-amber-200" />
                  <Scissors v-if="cardStyles[idx % cardStyles.length].type === 'sticker'" class="absolute top-2 right-2 w-6 h-6 text-lime-400" />
                  <PenTool v-if="cardStyles[idx % cardStyles.length].type === 'frame'" class="absolute -bottom-2 right-1/2 w-8 h-8 text-violet-300" />

                  <!-- Image Container -->
                  <div class="relative overflow-hidden mb-6 rounded-lg border border-slate-200/50 bg-white" :class="idx === 0 ? 'h-80' : 'h-56'">
                      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10"></div>
                      <img 
                          :src="prog.image" 
                          :alt="prog.title" 
                          class="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                      />
                  </div>

                  <!-- Text Content -->
                  <div class="text-center relative z-10">
                      <h3 class="text-2xl font-black mb-3 display-font" :class="cardStyles[idx % cardStyles.length].titleColor">
                          {{ prog.title }}
                      </h3>
                      
                      <p class="text-slate-500 text-sm font-bold leading-relaxed mb-4 line-clamp-3">
                          {{ prog.description }}
                      </p>

                  </div>
              </div>
          </FadeInSection>
      </div>
    </div>
</template>
