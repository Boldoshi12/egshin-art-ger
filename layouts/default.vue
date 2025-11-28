<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { APP_DATA } from '~/utils/constants'
import { Menu, X, Facebook, Instagram, Youtube, Mail, Palette } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)
const isNavVisible = ref(true)
const lastScrollY = ref(0)

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMenu = () => {
  isMobileMenuOpen.value = false
}

const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  if (currentScrollY < 10) {
    isNavVisible.value = true
  } else if (currentScrollY > lastScrollY.value + 5) {
    isNavVisible.value = false
    isMobileMenuOpen.value = false
  } else if (currentScrollY < lastScrollY.value - 5) {
    isNavVisible.value = true
  }

  lastScrollY.value = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navItems = [
  { label: "Нүүр", path: "/", color: "hover:text-rose-500", bg: "hover:bg-rose-50" },
  { label: "Хөтөлбөрүүд", path: "/programs", color: "hover:text-blue-500", bg: "hover:bg-blue-50" },
  { label: "Үзэсгэлэн", path: "/exhibitions", color: "hover:text-green-500", bg: "hover:bg-green-50" },
  { label: "Төсөл & Хамтын ажиллагаа", path: "/projects", color: "hover:text-purple-500", bg: "hover:bg-purple-50" },
  { label: "Артгэр дэлгүүр", path: "/shop", color: "hover:text-amber-500", bg: "hover:bg-amber-50" },
  { label: "Холбоо барих", path: "/contact", color: "hover:text-cyan-500", bg: "hover:bg-cyan-50" },
]
</script>

<template>
  <div class="flex flex-col min-h-screen font-sans text-gray-800 overflow-x-hidden">
    
    <!-- Smart Navbar Container -->
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out"
      :class="isNavVisible ? 'translate-y-0' : '-translate-y-full'"
    >
      <!-- Decorative Top Bar -->
      <div class="h-2 w-full flex">
        <div class="h-full w-1/5 bg-rose-400"></div>
        <div class="h-full w-1/5 bg-amber-400"></div>
        <div class="h-full w-1/5 bg-lime-400"></div>
        <div class="h-full w-1/5 bg-sky-400"></div>
        <div class="h-full w-1/5 bg-violet-400"></div>
      </div>

      <!-- Navigation -->
      <nav class="bg-white/95 backdrop-blur-sm shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border-b-2 border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-24">
            <!-- Logo area -->
            <NuxtLink to="/" class="flex items-center space-x-3 group" @click="closeMenu">
              <div class="w-12 h-12 bg-white border-2 border-slate-800 rounded-full overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-200">
                 <img src="/images/artger-main.jpg" alt="Egshin Artger Logo" class="w-full h-full object-cover" />
              </div>
              <div class="flex flex-col">
                <span class="text-2xl font-black tracking-tight text-slate-800 display-font group-hover:text-amber-500 transition-colors">
                  ЭГШИН АРТГЭР
                </span>
                <span class="text-xs font-bold text-slate-400 tracking-wider uppercase">
                  Уран зургийн урлан
                </span>
              </div>
            </NuxtLink>

            <!-- Desktop Nav -->
            <div class="hidden lg:flex space-x-1">
              <NuxtLink
                v-for="item in navItems"
                :key="item.path"
                :to="item.path"
                v-slot="{ isActive }"
                custom
              >
                <NuxtLink 
                    :to="item.path"
                    :class="[
                    'px-4 py-2 rounded-full text-base font-bold transition-all duration-200',
                    item.color,
                    item.bg,
                    isActive ? 'bg-slate-800 text-white shadow-md transform scale-105' : 'text-slate-600'
                    ]"
                >
                    {{ item.label }}
                </NuxtLink>
              </NuxtLink>
            </div>

            <!-- Mobile Menu Button -->
            <div class="lg:hidden">
              <button
                @click="toggleMenu"
                class="text-slate-800 hover:text-amber-500 transition-colors p-2"
              >
                <X v-if="isMobileMenuOpen" :size="32" :stroke-width="2.5" />
                <Menu v-else :size="32" :stroke-width="2.5" />
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Nav Dropdown -->
        <div
          class="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out border-t-2 border-dashed border-slate-200"
          :class="isMobileMenuOpen ? 'opacity-100 max-h-screen py-4' : 'opacity-0 max-h-0 py-0 overflow-hidden'"
        >
          <div class="px-4 space-y-3 flex flex-col items-center">
             <NuxtLink
                v-for="item in navItems"
                :key="item.path"
                :to="item.path"
                v-slot="{ isActive }"
                custom
              >
                <NuxtLink 
                    :to="item.path"
                    @click="closeMenu"
                    :class="[
                        'block w-full text-center px-4 py-3 rounded-2xl text-lg font-bold border-2',
                        isActive ? 'bg-amber-100 text-amber-600 border-amber-300' : 'border-transparent text-slate-600 hover:bg-slate-50'
                    ]"
                >
                    {{ item.label }}
                </NuxtLink>
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <!-- Spacer to prevent content overlap with fixed header -->
    <div class="h-[104px]"></div>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="relative bg-white pt-24 pb-12 overflow-hidden">
      <!-- Paper Edge Top -->
      <div class="absolute top-0 left-0 right-0 h-12 bg-white paper-edge-top -translate-y-1/2 z-10 transform rotate-180 bg-slate-100"></div>
      <div class="absolute top-0 inset-x-0 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <!-- Brand -->
          <div class="md:col-span-1">
            <div class="inline-block w-20 h-20 rounded-full overflow-hidden bg-white border-2 border-amber-200 mb-4">
               <img src="/images/artger-main.jpg" alt="Egshin Artger Logo" class="w-full h-full object-cover" />
            </div>
            <h3 class="text-2xl font-black display-font mb-4 text-slate-800">Эгшин Артгэр</h3>
            <p class="text-slate-500 mb-6 leading-relaxed font-medium">
              {{ APP_DATA.hero.slogan }}
            </p>
          </div>

          <!-- Links -->
          <div class="md:col-span-1">
            <h4 class="text-lg font-bold mb-6 text-slate-800 flex items-center justify-center md:justify-start">
               <span class="w-8 h-1 bg-rose-400 rounded-full mr-3"></span> Цэс
            </h4>
            <ul class="space-y-3">
              <li v-for="item in navItems" :key="item.path">
                  <NuxtLink :to="item.path" class="text-slate-500 hover:text-rose-500 font-bold transition-colors">{{ item.label }}</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="md:col-span-2">
            <h4 class="text-lg font-bold mb-6 text-slate-800 flex items-center justify-center md:justify-start">
              <span class="w-8 h-1 bg-sky-400 rounded-full mr-3"></span> Холбоо барих
            </h4>
            <div class="space-y-4 text-slate-600">
                <div v-for="(loc, idx) in APP_DATA.contact.locations" :key="idx" class="flex items-start justify-center md:justify-start bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span class="mr-3 mt-1 text-2xl">📍</span>
                    <span class="font-medium text-left">{{ loc }}</span>
                </div>
              <div class="flex items-center justify-center md:justify-start bg-slate-50 p-3 rounded-xl border border-slate-100">
                   <span class="mr-3 text-2xl">📞</span>
                   <span class="font-bold text-slate-800">{{ APP_DATA.contact.phones.join(", ") }}</span>
              </div>
            </div>
            
            <div class="mt-8 flex justify-center md:justify-start space-x-4">
               <a :href="APP_DATA.contact.social.fb" class="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
                  <Facebook :size="24" />
               </a>
               <a :href="APP_DATA.contact.social.ig" class="w-12 h-12 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
                  <Instagram :size="24" />
               </a>
               <a :href="APP_DATA.contact.social.yt" class="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
                  <Youtube :size="24" />
               </a>
               <a :href="`mailto:${APP_DATA.contact.social.email}`" class="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
                  <Mail :size="24" />
               </a>
            </div>
          </div>
        </div>
        
        <div class="border-t-2 border-dashed border-slate-200 mt-16 pt-8 text-center text-slate-400 font-bold text-sm">
          &copy; {{ new Date().getFullYear() }} Egshin Artger. Бүх эрх хуулиар хамгаалагдсан.
        </div>
      </div>
      
      <!-- Bottom decoration -->
      <div class="h-4 w-full flex mt-4">
          <div class="h-full w-1/5 bg-rose-400"></div>
          <div class="h-full w-1/5 bg-amber-400"></div>
          <div class="h-full w-1/5 bg-lime-400"></div>
          <div class="h-full w-1/5 bg-sky-400"></div>
          <div class="h-full w-1/5 bg-violet-400"></div>
      </div>
    </footer>
  </div>
</template>