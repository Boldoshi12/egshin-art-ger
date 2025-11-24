<script setup lang="ts">
import { APP_DATA } from '~/utils/constants'
import { Globe, Users, Building, School, Star, Sparkles, Rocket, Heart, Palette } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-purple-50 relative overflow-hidden">
      <!-- Animated Background Blobs -->
      <div class="absolute top-20 left-10 w-64 h-64 bg-violet-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
      <div class="absolute top-40 right-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div>
      
      <!-- Floating Decorative Elements -->
      <div class="absolute top-32 right-1/4 text-6xl animate-float opacity-40">🎨</div>
      <div class="absolute bottom-1/4 left-1/4 text-5xl animate-float animation-delay-1000 opacity-40">✨</div>
      <div class="absolute top-1/3 left-1/3 text-4xl animate-float animation-delay-2000 opacity-40">🌟</div>
      <div class="absolute bottom-1/3 right-1/3 text-5xl animate-float animation-delay-3000 opacity-40">🎭</div>

      <!-- Header Section -->
      <div class="relative py-24 text-center text-white overflow-hidden bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500">
           <!-- Background Pattern like home page -->
           <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           
           <!-- Floating decorative elements like home page -->
           <div class="absolute top-10 right-10 w-20 h-20 bg-white rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black transform -rotate-12 flex items-center justify-center animate-bounce">
               <Rocket :size="32" class="text-violet-500" />
           </div>
           <div class="absolute bottom-20 left-20 text-6xl animate-float">🎯</div>
           <div class="absolute top-1/3 left-10 text-4xl animate-pulse">🌟</div>
           <div class="absolute bottom-1/3 right-20 text-3xl animate-bounce animation-delay-400">✨</div>
           
           <div class="relative z-10 px-4">
               <div class="inline-block px-6 py-3 bg-white rounded-full mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black transform -rotate-2 hover:rotate-2 transition-transform">
                   <span class="font-black text-slate-800 tracking-wider uppercase flex items-center">
                       <Palette class="w-5 h-5 text-violet-500 mr-2" /> ТӨСӨЛ & ХАМТЫН АЖИЛЛАГАА
                   </span>
               </div>
               
               <h1 class="text-5xl md:text-7xl font-black display-font mb-2 drop-shadow-lg relative inline-block">
                   Төсөл & Хамтын ажиллагаа
                   <!-- Squiggly underline like home page -->
                   <svg class="absolute w-full h-6 -bottom-2 left-0 text-yellow-300 -z-10" viewBox="0 0 100 15" preserveAspectRatio="none">
                       <path d="M0 5 Q 15 15 30 5 T 60 5 T 90 5 T 100 10" stroke="currentColor" stroke-width="8" fill="none" stroke-linecap="round" />
                   </svg>
               </h1>
               
               <p class="text-xl md:text-2xl font-bold text-white/90 max-w-2xl mx-auto mt-6">
                   Бидний хэрэгжүүлж буй төслүүд болон хамтрагч байгууллагууд 🌟
               </p>
           </div>
           
           <!-- Paper tear bottom like home page -->
           <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-br from-violet-50 via-pink-50 to-purple-50 paper-edge-top z-10"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 py-20 space-y-24 relative z-10">
          <!-- Online Training Section - Featured -->
          <FadeInSection>
              <div class="relative group">
                  <!-- Decorative tape at top -->
                  <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-48 h-10 bg-yellow-200/80 shadow-md z-20 rotate-2 border border-yellow-300"></div>
                  
                  <div class="bg-gradient-to-br from-white via-violet-50 to-purple-50 rounded-[3rem] p-10 md:p-16 shadow-[12px_12px_0px_0px_rgba(139,92,246,0.3)] border-4 border-violet-200 relative overflow-hidden transform hover:scale-[1.02] transition-all duration-500 hover:shadow-[16px_16px_0px_0px_rgba(139,92,246,0.4)]">
                      <!-- Corner Sticker -->
                      <div class="absolute -top-4 -right-4 w-32 h-32 bg-pink-400 rounded-full flex items-center justify-center text-4xl shadow-xl border-4 border-white transform rotate-12 group-hover:rotate-[360deg] transition-transform duration-700">
                          💻
                      </div>
                      
                      <!-- Decorative circles background -->
                      <div class="absolute bottom-10 left-10 w-40 h-40 bg-violet-200 rounded-full opacity-20 blur-2xl"></div>
                      <div class="absolute top-10 right-20 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-2xl"></div>
                      
                      <div class="flex flex-col md:flex-row items-center gap-12 relative z-10">
                          <!-- Icon Section -->
                          <div class="flex-shrink-0 relative">
                              <div class="w-40 h-40 bg-gradient-to-br from-violet-400 to-purple-500 rounded-[2rem] flex items-center justify-center text-white shadow-[8px_8px_0px_0px_rgba(139,92,246,1)] border-4 border-white transform -rotate-6 group-hover:rotate-6 transition-transform duration-500">
                                  <Globe :size="80" :stroke-width="2" />
                              </div>
                              <!-- Mini decorative elements -->
                              <div class="absolute -bottom-4 -right-4 text-4xl animate-bounce">🌍</div>
                          </div>
                          
                          <!-- Content Section -->
                          <div class="text-center md:text-left flex-1">
                              <div class="inline-block mb-4">
                                  <div class="flex items-center gap-2 bg-violet-500 text-white px-5 py-2 rounded-full font-black text-sm uppercase tracking-wider shadow-lg transform -rotate-2">
                                      <Rocket :size="18" />
                                      <span>Онлайн хөтөлбөр</span>
                                  </div>
                              </div>
                              
                              <h2 class="text-4xl md:text-5xl font-black text-slate-800 mb-6 display-font leading-tight">
                                  {{ APP_DATA.projects.online.title }}
                              </h2>
                              
                              <p class="text-slate-600 text-xl font-bold leading-relaxed mb-8 bg-white/60 p-6 rounded-2xl border-2 border-dashed border-violet-300">
                                  {{ APP_DATA.projects.online.desc }}
                              </p>
                              
                              <button class="group/btn px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-full font-black text-lg hover:from-violet-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1 border-4 border-white relative overflow-hidden">
                                  <span class="relative z-10 flex items-center gap-2">
                                      Дэлгэрэнгүй үзэх
                                      <Sparkles :size="20" class="group-hover/btn:animate-spin" />
                                  </span>
                                  <div class="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </FadeInSection>

          <!-- Collaborations Section Header -->
          <div class="text-center relative">
              <div class="inline-block bg-white px-10 py-5 rounded-[2rem] shadow-xl border-4 border-dashed border-purple-300 transform rotate-1">
                  <h2 class="text-4xl font-black text-slate-800 display-font flex items-center gap-3">
                      <Star class="text-yellow-400 fill-yellow-400" :size="32" />
                      Хамтрагч байгууллагууд
                      <Star class="text-yellow-400 fill-yellow-400" :size="32" />
                  </h2>
              </div>
          </div>

          <!-- Collaborations Grid -->
          <div class="grid md:grid-cols-2 gap-10">
              <FadeInSection v-for="(collab, idx) in APP_DATA.projects.collabs" :key="idx" :delay="`${idx * 100}ms`">
                  <div 
                    class="h-full bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border-4 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group transform hover:-translate-y-3 hover:rotate-0"
                    :class="[
                      ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2'][idx % 4],
                      ['border-rose-300', 'border-amber-300', 'border-sky-300', 'border-lime-300'][idx % 4],
                      ['shadow-[8px_8px_0px_0px_rgba(244,63,94,0.3)]', 'shadow-[8px_8px_0px_0px_rgba(245,158,11,0.3)]', 'shadow-[8px_8px_0px_0px_rgba(14,165,233,0.3)]', 'shadow-[8px_8px_0px_0px_rgba(132,204,22,0.3)]'][idx % 4]
                    ]"
                  >
                      <!-- Decorative Pattern Background -->
                      <div class="absolute inset-0 opacity-5" :class="['bg-rose-400', 'bg-amber-400', 'bg-sky-400', 'bg-lime-400'][idx % 4]">
                          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                      </div>
                      
                      <!-- Corner Decoration -->
                      <div 
                        class="absolute -top-8 -right-8 w-40 h-40 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-125 opacity-20"
                        :class="['bg-rose-300', 'bg-amber-300', 'bg-sky-300', 'bg-lime-300'][idx % 4]"
                      ></div>
                      
                      <!-- Top decorative tape -->
                      <div 
                        class="absolute -top-4 left-1/4 w-24 h-8 shadow-sm rotate-6 border opacity-80"
                        :class="['bg-rose-200 border-rose-300', 'bg-amber-200 border-amber-300', 'bg-sky-200 border-sky-300', 'bg-lime-200 border-lime-300'][idx % 4]"
                      ></div>
                      
                      <div class="flex justify-between items-start mb-8 relative z-10">
                          <!-- Icon -->
                          <div 
                            class="p-5 rounded-3xl shadow-lg transform -rotate-6 group-hover:rotate-6 transition-transform duration-500 border-4 border-white"
                            :class="[
                                'bg-gradient-to-br from-rose-400 to-rose-500 text-white',
                                'bg-gradient-to-br from-amber-400 to-amber-500 text-white',
                                'bg-gradient-to-br from-sky-400 to-sky-500 text-white',
                                'bg-gradient-to-br from-lime-400 to-lime-500 text-white'
                            ][idx % 4]"
                          >
                              <Building v-if="idx === 0" :size="36" :stroke-width="2.5"/>
                              <School v-else-if="idx === 1" :size="36" :stroke-width="2.5"/>
                              <Users v-else-if="idx === 2" :size="36" :stroke-width="2.5"/>
                              <Star v-else :size="36" :stroke-width="2.5"/>
                          </div>
                          
                          <!-- Year Badge -->
                          <div 
                            class="text-white text-sm font-black px-5 py-2 rounded-full uppercase tracking-wider shadow-lg transform rotate-3 group-hover:scale-110 transition-transform border-2 border-white"
                            :class="['bg-slate-800', 'bg-slate-700', 'bg-slate-800', 'bg-slate-700'][idx % 4]"
                          >
                              {{ collab.year }}
                          </div>
                      </div>
                      
                      <!-- Emoji decoration -->
                      <div class="absolute top-8 right-8 text-4xl opacity-30 transform rotate-12">
                          {{ ['🏛️', '🎓', '👥', '⭐'][idx % 4] }}
                      </div>
                      
                      <h3 class="text-2xl md:text-3xl font-black text-slate-800 mb-6 leading-tight display-font relative z-10 min-h-[4rem] flex items-center">
                          {{ collab.title }}
                      </h3>
                      
                      <p class="text-slate-600 font-bold leading-relaxed text-lg relative z-10 bg-slate-50/80 p-5 rounded-2xl">
                          {{ collab.desc }}
                      </p>
                      
                      <!-- Bottom corner sticker -->
                      <div 
                        class="absolute -bottom-6 -left-6 w-28 h-28 rounded-full flex items-center justify-center font-black text-white text-xl shadow-xl border-4 border-white transform -rotate-12 group-hover:rotate-12 transition-transform duration-500"
                        :class="['bg-rose-500', 'bg-amber-500', 'bg-sky-500', 'bg-lime-500'][idx % 4]"
                      >
                          <Star class="fill-current" :size="40" />
                      </div>
                  </div>
              </FadeInSection>
          </div>

          <!-- Fun Footer Message -->
          <div class="text-center py-12">
              <div class="inline-block bg-gradient-to-r from-violet-100 via-pink-100 to-purple-100 px-12 py-6 rounded-full border-4 border-dashed border-violet-300 shadow-lg transform hover:scale-105 transition-transform">
                  <p class="text-2xl font-black text-slate-700 flex items-center gap-3">
                      <Sparkles class="text-violet-500" :size="28" />
                      Бидэнтэй хамтран ажиллахыг хүсвэл холбогдоорой!
                      <Heart class="text-pink-500 fill-pink-500" :size="28" />
                  </p>
              </div>
          </div>
      </div>
  </div>
</template>

<style scoped>
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(20px, -20px) scale(1.1); }
  50% { transform: translate(-20px, 20px) scale(0.9); }
  75% { transform: translate(20px, 20px) scale(1.05); }
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>