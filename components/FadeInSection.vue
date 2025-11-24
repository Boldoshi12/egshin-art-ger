<template>
  <div
    ref="domRef"
    class="fade-in-section"
    :class="{ 'is-visible': isVisible }"
    :style="{ transitionDelay: delay }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  delay: {
    type: String,
    default: '0ms',
  },
});

const isVisible = ref(false);
const domRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    });
  });

  if (domRef.value) {
    observer.observe(domRef.value);
  }
});

onUnmounted(() => {
  if (observer && domRef.value) {
    observer.unobserve(domRef.value);
  }
});
</script>

<style scoped>
.fade-in-section {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
  transition: opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: opacity, transform;
}

.fade-in-section.is-visible {
  opacity: 1;
  transform: none;
}
</style>