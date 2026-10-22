<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ordinateursExemples, STORAGE_KEY } from '../data'
import type { Ordinateur } from '../types'

const route = useRoute()
const router = useRouter()
const isEditing = computed(() => Boolean(route.params.id))
const id = isEditing.value ? Number(route.params.id) : 0
const saved = localStorage.getItem(STORAGE_KEY)
const ordinateurs: Ordinateur[] = saved ? JSON.parse(saved) : ordinateursExemples
const existing = ordinateurs.find((ordinateur) => ordinateur.id === id)
const form = reactive({
  modele: existing?.modele ?? '',
  processeur: existing?.processeur ?? '',
  memoire: existing?.memoire ?? 8,
  disque: existing?.disque ?? 256,
  carteGraphique: existing?.carteGraphique ?? '',
  photo: existing?.photo ?? '/images/dell.jpg',
})
const errors = ref<string[]>([])

function enregistrer() {
  errors.value = []
  if (!form.modele.trim()) errors.value.push('Le modèle est obligatoire.')
  if (!form.processeur.trim()) errors.value.push('Le processeur est obligatoire.')
  if (form.memoire <= 0) errors.value.push('La mémoire doit être strictement positive.')
  if (form.disque <= 0) errors.value.push('Le disque doit être strictement positif.')
  if (errors.value.length) return

  const updated: Ordinateur = { id: isEditing.value ? id : Date.now(), ...form, modele: form.modele.trim(), processeur: form.processeur.trim() }
  const index = ordinateurs.findIndex((ordinateur) => ordinateur.id === id)
  if (index >= 0) ordinateurs[index] = updated
  else ordinateurs.push(updated)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ordinateurs))
  router.push('/ordinateurs')
}
</script>

<template>
  <section class="edit-page">
    <div class="section-heading form-heading">
      <div>
        <h1>{{ isEditing ? 'Modifier un ordinateur' : 'Ajouter un ordinateur' }}</h1>
        <p class="subtitle">Renseignez les caractéristiques du matériel</p>
      </div>
      <RouterLink class="back-button" to="/ordinateurs">← Retour à la liste</RouterLink>
    </div>

    <form class="computer-form" @submit.prevent="enregistrer">
      <div class="form-preview">
        <img :src="form.photo || '/images/dell.jpg'" :alt="form.modele || 'Aperçu de l’ordinateur'" />
        <p>Aperçu de la photo</p>
      </div>
      <div class="form-fields">
        <div v-if="errors.length" class="errors" role="alert">
          <div v-for="error in errors" :key="error">{{ error }}</div>
        </div>
        <label>Modèle *<input v-model="form.modele" type="text" placeholder="Ex. Dell Latitude 5540" /></label>
        <label>Processeur *<input v-model="form.processeur" type="text" placeholder="Ex. Intel Core i5" /></label>
        <div class="form-row">
          <label>Mémoire (Go) *<input v-model.number="form.memoire" min="1" type="number" /></label>
          <label>Disque (Go) *<input v-model.number="form.disque" min="1" type="number" /></label>
        </div>
        <label>Carte graphique *<input v-model="form.carteGraphique" type="text" placeholder="Ex. Intel Iris Xe" /></label>
        <label>Photo (nom ou chemin)<input v-model="form.photo" type="text" /></label>
        <div class="form-actions">
          <RouterLink class="cancel-button" to="/ordinateurs">Annuler</RouterLink>
          <button class="save-button" type="submit">▣ &nbsp;Enregistrer</button>
        </div>
      </div>
    </form>
  </section>
</template>
