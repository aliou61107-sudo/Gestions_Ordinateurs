<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import OrdinateurCard from '../components/OrdinateurCard.vue'
import { ordinateursExemples, STORAGE_KEY } from '../data'
import type { Ordinateur } from '../types'

const router = useRouter()
const saved = localStorage.getItem(STORAGE_KEY)
const ordinateurs = ref<Ordinateur[]>(saved ? JSON.parse(saved) : ordinateursExemples)
const recherche = ref('')
const triMemoire = ref(false)

if (!saved) localStorage.setItem(STORAGE_KEY, JSON.stringify(ordinateurs.value))

const ordinateursFiltres = computed(() => {
  const terme = recherche.value.trim().toLowerCase()
  const filtered = ordinateurs.value.filter((ordinateur) =>
    !terme || ordinateur.modele.toLowerCase().includes(terme) || ordinateur.processeur.toLowerCase().includes(terme),
  )
  return triMemoire.value ? [...filtered].sort((a, b) => b.memoire - a.memoire) : filtered
})

function supprimer(id: number) {
  const ordinateur = ordinateurs.value.find((item) => item.id === id)
  if (!ordinateur || !confirm(`Voulez-vous supprimer « ${ordinateur.modele} » ?`)) return
  ordinateurs.value = ordinateurs.value.filter((item) => item.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ordinateurs.value))
}
</script>

<template>
  <section>
    <div class="section-heading">
      <div>
        <h1>Liste des ordinateurs</h1>
        <p class="subtitle">{{ ordinateursFiltres.length }} ordinateur{{ ordinateursFiltres.length > 1 ? 's' : '' }} enregistré{{ ordinateursFiltres.length > 1 ? 's' : '' }}</p>
      </div>
      <button class="sort-button" type="button" :class="{ active: triMemoire }" @click="triMemoire = !triMemoire">
        Trier par mémoire
      </button>
    </div>

    <div class="search-row">
      <label class="search-field">
        <span aria-hidden="true">⌕</span>
        <input v-model="recherche" type="search" placeholder="Rechercher par modèle ou processeur..." />
      </label>
    </div>

    <div v-if="ordinateursFiltres.length" class="computer-grid">
      <OrdinateurCard
        v-for="ordinateur in ordinateursFiltres"
        :key="ordinateur.id"
        :ordinateur="ordinateur"
        @modifier="router.push(`/ordinateurs/modifier/${$event}`)"
        @supprimer="supprimer"
      />
    </div>
    <div v-else class="empty-state">Aucun ordinateur ne correspond à votre recherche.</div>
  </section>
</template>
