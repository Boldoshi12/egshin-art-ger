<script setup lang="ts">
import { APP_DATA } from '~/utils/constants'
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Heart } from 'lucide-vue-next'
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 py-20">
        <div class="grid md:grid-cols-2 gap-12">
            <!-- Info Card -->
            <FadeInSection>
                <div class="relative">
                    <!-- Tape decoration -->
                    <div class="absolute -top-4 left-1/4 w-32 h-8 bg-sky-200/80 shadow-sm transform -rotate-3 z-10"></div>
                    
                    <div class="bg-white rounded-[2rem] p-10 shadow-[8px_8px_0px_0px_rgba(14,165,233,0.2)] border-2 border-sky-200 transform rotate-1 hover:rotate-0 transition-transform">
                        <h2 class="text-3xl font-black text-slate-800 mb-8 display-font inline-block border-b-4 border-dashed border-sky-200 pb-2">
                            Мэдээлэл
                        </h2>
                        
                        <div class="space-y-8">
                            <!-- Address -->
                            <div class="group">
                                <div class="flex items-center text-sky-600 mb-4 font-black text-xl">
                                    <div class="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center mr-3 shadow-[2px_2px_0px_0px_rgba(14,165,233,0.3)] border-2 border-sky-200 group-hover:bg-sky-500 group-hover:text-white transition-all">
                                        <MapPin :size="20" />
                                    </div> 
                                    Хаяг, байршил
                                </div>
                                <div class="pl-16 space-y-3 text-slate-600 font-bold">
                                    <div v-for="(loc, idx) in APP_DATA.contact.locations" :key="idx" class="bg-slate-50 p-4 rounded-xl border-2 border-slate-100 hover:border-sky-300 hover:bg-sky-50 transition-all">
                                        <span class="text-sky-500 font-black text-lg mr-2">{{ idx + 1 }}.</span>{{ loc }}
                                    </div>
                                </div>
                            </div>

                            <!-- Phone -->
                            <div class="group">
                                <div class="flex items-center text-sky-600 mb-4 font-black text-xl">
                                    <div class="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center mr-3 shadow-[2px_2px_0px_0px_rgba(14,165,233,0.3)] border-2 border-sky-200 group-hover:bg-sky-500 group-hover:text-white transition-all">
                                         <Phone :size="20" />
                                    </div>
                                    Утас
                                </div>
                                <div class="pl-16 text-slate-700 font-black text-2xl bg-slate-50 p-4 rounded-xl border-2 border-slate-100">
                                    {{ APP_DATA.contact.phones.join(" • ") }}
                                </div>
                            </div>

                            <!-- Email -->
                            <div class="group">
                                 <div class="flex items-center text-sky-600 mb-4 font-black text-xl">
                                    <div class="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center mr-3 shadow-[2px_2px_0px_0px_rgba(14,165,233,0.3)] border-2 border-sky-200 group-hover:bg-sky-500 group-hover:text-white transition-all">
                                        <Mail :size="20" />
                                    </div>
                                    Имэйл
                                </div>
                                <div class="pl-16 text-slate-600 font-bold text-lg bg-slate-50 p-4 rounded-xl border-2 border-slate-100 break-all">
                                    {{ APP_DATA.contact.social.email }}
                                </div>
                            </div>
                        </div>

                        <!-- Social Media -->
                        <div class="mt-12 bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl border-2 border-dashed border-sky-200 relative">
                            <div class="absolute -top-3 right-8 w-24 h-6 bg-white/40 backdrop-blur-sm shadow-sm rotate-2 border border-white/50"></div>
                            
                            <h3 class="text-xl font-black text-sky-800 mb-6 text-center flex items-center justify-center gap-2">
                                <Heart :size="20" class="text-red-500 fill-red-500" />
                                Биднийг дагаарай
                            </h3>
                            <div class="flex justify-center gap-6">
                                <a :href="APP_DATA.contact.social.fb" class="w-16 h-16 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(59,130,246,0.5)] border-2 border-blue-600 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,0.5)] transition-all transform hover:rotate-6">
                                    <Facebook :size="28" />
                                </a>
                                <a :href="APP_DATA.contact.social.ig" class="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(236,72,153,0.5)] border-2 border-pink-600 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(236,72,153,0.5)] transition-all transform hover:-rotate-6">
                                    <Instagram :size="28" />
                                </a>
                                <a :href="APP_DATA.contact.social.yt" class="w-16 h-16 rounded-2xl bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(239,68,68,0.5)] border-2 border-red-600 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(239,68,68,0.5)] transition-all transform hover:rotate-6">
                                    <Youtube :size="28" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <!-- Map -->
            <FadeInSection :delay="'200ms'">
                <div class="relative">
                    <!-- Tape decoration -->
                    <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-amber-200/90 shadow-sm z-10 rotate-3 border border-amber-300"></div>
                    
                    <div class="bg-white p-6 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] border-2 border-slate-200 transform -rotate-1 hover:rotate-0 transition-transform duration-500 h-[600px]">
                         <div class="w-full h-full rounded-[1.5rem] overflow-hidden border-2 border-slate-200 relative">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.3290000000003!2d106.93!3d47.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDU0JzM2LjAiTiAxMDbCsDU1JzQ4LjAiRQ!5e0!3m2!1sen!2smn!4v1600000000000!5m2!1sen!2smn" 
                                width="100%" 
                                height="100%" 
                                style="border: 0" 
                                allowfullscreen 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"
                                class="w-full h-full"
                            ></iframe>
                            <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-2 border-sky-200">
                                <p class="text-slate-700 font-black text-center flex items-center justify-center gap-2">
                                    <MapPin :size="20" class="text-sky-500" />
                                    Бидний байршлуудыг газрын зураг дээр харах
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </div>
    </div>
</template>
