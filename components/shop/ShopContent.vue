<script setup lang="ts">
import { APP_DATA } from '~/utils/constants'
import { ShoppingBag, Facebook, Instagram, Youtube, Mail, Star, Sparkles, Heart, Gift } from 'lucide-vue-next'
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 py-20">
        <!-- Coming Soon Section -->
        <FadeInSection>
            <div class="relative">
                <!-- Tape decoration like home page -->
                <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-48 h-10 bg-amber-200/80 shadow-sm border border-amber-300 flex items-center justify-center rotate-2 z-10">
                    <span class="font-black text-amber-800 text-sm uppercase tracking-wider">⏰ Удахгүй</span>
                </div>
                
                <div class="bg-white p-12 md:p-16 rounded-[3rem] shadow-[10px_10px_0px_0px_rgba(251,191,36,0.4)] border-2 border-amber-300 text-center mb-16 relative transform hover:rotate-0 transition-transform rotate-1">
                    <!-- Decorative corner stickers -->
                    <div class="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black transform -rotate-12">
                        <Star :size="32" class="fill-current" />
                    </div>
                    <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black transform rotate-12">
                        <Gift :size="36" />
                    </div>
                    
                    <div class="inline-block p-6 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
                        <ShoppingBag :size="64" :stroke-width="2" class="text-amber-600" />
                    </div>
                    
                    <h2 class="text-5xl font-black display-font text-slate-800 mb-6">
                        Бүтээлч багцууд
                    </h2>
                    
                    <div class="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl border-2 border-dashed border-sky-300 mb-8 max-w-3xl mx-auto">
                        <p class="text-slate-700 text-xl font-bold leading-relaxed">
                            Манай дэлгүүрт тун удахгүй хүүхдийн бүтээлч сэтгэлгээг хөгжүүлэх <span class="text-rose-500 font-black">сонирхолтой багцууд</span>, урлагийн хэрэгслүүд, зураг будгийн материал худалдаалагдаж эхлэх болно! 🎨✨
                        </p>
                    </div>
                    
                    <!-- Coming soon emojis -->
                    <div class="flex justify-center gap-6 mb-8">
                        <div class="text-5xl hover:scale-125 transition-transform cursor-pointer">🎨</div>
                        <div class="text-5xl hover:scale-125 transition-transform cursor-pointer">✏️</div>
                        <div class="text-5xl hover:scale-125 transition-transform cursor-pointer">🖍️</div>
                        <div class="text-5xl hover:scale-125 transition-transform cursor-pointer">🎭</div>
                    </div>
                    
                    <!-- Decorative stars like home page -->
                    <div class="flex justify-center gap-4">
                        <Star class="text-yellow-400 fill-yellow-400 animate-pulse" :size="28" />
                        <Sparkles class="text-amber-500 animate-bounce" :size="28" />
                        <Star class="text-yellow-400 fill-yellow-400 animate-pulse" :size="28" />
                    </div>
                </div>
            </div>
        </FadeInSection>

            <!-- Fun Info Cards -->
            <div class="grid md:grid-cols-3 gap-8 mb-16">
                <FadeInSection :delay="'100ms'">
                    <div class="bg-white rounded-[2rem] p-8 shadow-[5px_5px_0px_0px_rgba(244,63,94,0.3)] border-2 border-rose-200 transform rotate-1 hover:rotate-0 transition-all hover:-translate-y-2">
                        <div class="text-6xl mb-4 text-center">🎨</div>
                        <h3 class="text-2xl font-black text-rose-600 mb-3 text-center display-font">Урлагийн хэрэгсэл</h3>
                        <p class="text-slate-600 font-bold text-center">Өнгийн будаг, сойз, бусад бүтээлч хэрэгслүүд</p>
                    </div>
                </FadeInSection>
                
                <FadeInSection :delay="'200ms'">
                    <div class="bg-white rounded-[2rem] p-8 shadow-[5px_5px_0px_0px_rgba(245,158,11,0.3)] border-2 border-amber-200 transform -rotate-1 hover:rotate-0 transition-all hover:-translate-y-2">
                        <div class="text-6xl mb-4 text-center">📚</div>
                        <h3 class="text-2xl font-black text-amber-600 mb-3 text-center display-font">Ном, материал</h3>
                        <p class="text-slate-600 font-bold text-center">Урлагийн ном, гарын авлага, заавар</p>
                    </div>
                </FadeInSection>
                
                <FadeInSection :delay="'300ms'">
                    <div class="bg-white rounded-[2rem] p-8 shadow-[5px_5px_0px_0px_rgba(14,165,233,0.3)] border-2 border-sky-200 transform rotate-2 hover:rotate-0 transition-all hover:-translate-y-2">
                        <div class="text-6xl mb-4 text-center">🎁</div>
                        <h3 class="text-2xl font-black text-sky-600 mb-3 text-center display-font">Бэлэг багцууд</h3>
                        <p class="text-slate-600 font-bold text-center">Төрсөн өдөр, баярт зориулсан багцууд</p>
                    </div>
                </FadeInSection>
            </div>

            <!-- Social Media Section -->
            <div class="text-center mb-8">
                <div class="inline-block bg-white px-8 py-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] border-2 border-dashed border-pink-300 transform -rotate-1 hover:rotate-0 transition-transform">
                    <h3 class="text-2xl font-black text-pink-700 display-font flex items-center gap-2">
                        <Heart class="text-rose-500 fill-rose-500" :size="24" />
                        Биднийг дагаарай
                    </h3>
                </div>
            </div>

            <!-- Social Links Grid -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <a :href="APP_DATA.contact.social.fb" target="_blank" rel="noopener noreferrer" class="group">
                    <div class="flex flex-col items-center p-6 bg-white rounded-3xl shadow-[5px_5px_0px_0px_rgba(59,130,246,0.3)] border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all hover:-translate-y-2 transform rotate-1 hover:rotate-0">
                        <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black group-hover:scale-110 transition-transform">
                            <Facebook :size="32" />
                        </div>
                        <span class="font-bold text-slate-700 group-hover:text-blue-600">Facebook</span>
                        <div class="text-2xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity">👍</div>
                    </div>
                </a>

                <a :href="APP_DATA.contact.social.ig" target="_blank" rel="noopener noreferrer" class="group">
                    <div class="flex flex-col items-center p-6 bg-white rounded-3xl shadow-[5px_5px_0px_0px_rgba(236,72,153,0.3)] border-2 border-pink-200 hover:border-pink-400 hover:bg-pink-50 transition-all hover:-translate-y-2 transform -rotate-1 hover:rotate-0">
                        <div class="w-16 h-16 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center text-white mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black group-hover:scale-110 transition-transform">
                            <Instagram :size="32" />
                        </div>
                        <span class="font-bold text-slate-700 group-hover:text-pink-600">Instagram</span>
                        <div class="text-2xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity">📸</div>
                    </div>
                </a>

                <a :href="APP_DATA.contact.social.yt" target="_blank" rel="noopener noreferrer" class="group">
                    <div class="flex flex-col items-center p-6 bg-white rounded-3xl shadow-[5px_5px_0px_0px_rgba(239,68,68,0.3)] border-2 border-red-200 hover:border-red-400 hover:bg-red-50 transition-all hover:-translate-y-2 transform rotate-2 hover:rotate-0">
                        <div class="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center text-white mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black group-hover:scale-110 transition-transform">
                            <Youtube :size="32" />
                        </div>
                        <span class="font-bold text-slate-700 group-hover:text-red-600">YouTube</span>
                        <div class="text-2xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity">🎥</div>
                    </div>
                </a>

                <a :href="`mailto:${APP_DATA.contact.social.email}`" class="group">
                    <div class="flex flex-col items-center p-6 bg-white rounded-3xl shadow-[5px_5px_0px_0px_rgba(245,158,11,0.3)] border-2 border-amber-200 hover:border-amber-400 hover:bg-amber-50 transition-all hover:-translate-y-2 transform -rotate-2 hover:rotate-0">
                        <div class="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-white mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black group-hover:scale-110 transition-transform">
                            <Mail :size="32" />
                        </div>
                        <span class="font-bold text-slate-700 group-hover:text-amber-600">Email</span>
                        <div class="text-2xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity">✉️</div>
                    </div>
                </a>
            </div>
    </div>
</template>
