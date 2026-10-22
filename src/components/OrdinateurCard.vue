<script setup lang="ts">
import type { Ordinateur } from '../types'

defineProps<{ ordinateur: Ordinateur }>()

const emit = defineEmits<{
  modifier: [id: number]
  supprimer: [id: number]
}>()
</script>

<template>
  <article class="computer-card">
    <img :src="ordinateur.photo" :alt="`Photo de ${ordinateur.modele}`" class="computer-photo" />
    <div class="card-body">
      <h2>{{ ordinateur.modele }}</h2>
      <dl class="specifications">
        <div><dt>Processeur :</dt><dd>{{ ordinateur.processeur }}</dd></div>
        <div><dt>Mémoire :</dt><dd>{{ ordinateur.memoire }} Go</dd></div>
        <div><dt>Disque :</dt><dd>{{ ordinateur.disque }} Go</dd></div>
        <div><dt>Carte graphique :</dt><dd>{{ ordinateur.carteGraphique }}</dd></div>
      </dl>
      <div class="card-actions">
        <button class="button button-edit" type="button" @click="emit('modifier', ordinateur.id)">
          ✎ &nbsp;Modifier
        </button>
        <button class="button button-delete" type="button" @click="emit('supprimer', ordinateur.id)">
          ▣ &nbsp;Supprimer
        </button>
      </div>
    </div>
  </article>
</template>
