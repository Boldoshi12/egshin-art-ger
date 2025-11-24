<script setup lang="ts">
import { APP_DATA } from '~/utils/constants'
import { ArrowRight, Palette, Brush, Heart, Star, Cloud, Sun, Smile } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col overflow-hidden bg-[#fffbeb]">
    <!-- Hero Section -->
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

    <!-- Intro Section -->
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

    <!-- Invitation Section -->
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

    <!-- Philosophy / Quotes Section -->
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
  </div>
</template>