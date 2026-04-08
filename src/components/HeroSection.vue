<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Animated gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"></div>
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    </div>

    <!-- Grid pattern overlay -->
    <div
      class="absolute inset-0 opacity-[0.03]"
      style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 60px 60px;"
    ></div>

    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <div class="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium">
        Open to Senior / Staff Engineer Roles
      </div>

      <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6">
        Mohit Chandana
      </h1>

      <p class="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        Senior Rails Engineer &amp; Team Lead&ensp;|&ensp;HIPAA Healthcare AI&ensp;|&ensp;4 Apps in Production
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#projects"
          class="px-8 py-3.5 bg-accent hover:bg-accent-hover text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-accent/25"
        >
          View My Work
        </a>
        <a
          href="/Mohit_Chandana_Resume_2026.pdf"
          target="_blank"
          class="px-8 py-3.5 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white rounded-lg font-semibold transition-all"
        >
          Download Resume
        </a>
      </div>

      <!-- Scroll indicator -->
      <div class="mt-16 animate-bounce">
        <svg class="w-6 h-6 mx-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>
