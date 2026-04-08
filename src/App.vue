<template>
  <div class="min-h-screen bg-navy-900">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <BlogSection />
      <ContactSection />
    </main>
    <footer class="border-t border-navy-700 py-8 text-center text-sm text-gray-500">
      <p>&copy; {{ new Date().getFullYear() }} Mohit Chandana. Built with Vue.js &amp; Tailwind CSS.</p>
    </footer>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import BlogSection from './components/BlogSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>
