<script setup lang="ts">
import { Smile } from 'lucide-vue-next'
</script>

<template>
    <section class="relative py-24 overflow-hidden bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
        <!-- Pattern -->
        <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <!-- Floating decorative elements like home page -->
        <div class="absolute top-10 right-20 text-5xl animate-bounce">📞</div>
        <div class="absolute bottom-20 left-20 text-4xl animate-pulse">✉️</div>
        <div class="absolute top-1/3 left-10 text-3xl animate-float">💬</div>
        
        <div class="relative z-10 text-center px-4">
            <div class="inline-block px-6 py-3 bg-white rounded-full mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black transform -rotate-2 hover:rotate-2 transition-transform">
                <span class="font-black text-slate-800 tracking-wider uppercase flex items-center">
                    <Smile class="w-5 h-5 text-sky-500 mr-2" /> ХОЛБОО БАРИХ
                </span>
            </div>
            
            <h1 class="text-5xl md:text-7xl font-black display-font mb-2 text-white drop-shadow-lg relative inline-block">
                Холбоо барих
                <!-- Squiggly underline like home page -->
                <svg class="absolute w-full h-6 -bottom-2 left-0 text-yellow-300 -z-10" viewBox="0 0 100 15" preserveAspectRatio="none">
                    <path d="M0 5 Q 15 15 30 5 T 60 5 T 90 5 T 100 10" stroke="currentColor" stroke-width="8" fill="none" stroke-linecap="round" />
                </svg>
            </h1>
            
            <p class="text-xl md:text-2xl font-bold text-white/90 max-w-2xl mx-auto mt-6">
                Бидэнтэй холбогдож дэлгэрэнгүй мэдээлэл аваарай 💬
            </p>
        </div>
        
        <!-- Paper edge bottom like home page -->
        <div class="absolute bottom-0 left-0 right-0 h-16 bg-[#fffbeb] paper-edge-top"></div>
    </section>
</template>
