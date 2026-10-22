<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-shell">
    <header class="topbar">
      <div class="page-container topbar-content">
        <RouterLink class="brand" to="/ordinateurs">
          <span class="brand-icon">▣</span>
          <span>
            <strong>Parc informatique</strong>
            <small>Gestion des ordinateurs</small>
          </span>
        </RouterLink>
        <RouterLink class="add-button" to="/ordinateurs/ajouter">
          <span aria-hidden="true">+</span>
          Ajouter un ordinateur
        </RouterLink>
      </div>
    </header>

    <main class="page-container page-content">
      <RouterView />
    </main>
  </div>
</template>
