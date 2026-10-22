import type { Ordinateur } from './types'

export const ordinateursExemples: Ordinateur[] = [
  { id: 1, modele: 'Dell Latitude 5540', processeur: 'Intel Core i5', memoire: 16, disque: 512, carteGraphique: 'Intel Iris Xe', photo: '/images/dell.jpg' },
  { id: 2, modele: 'HP ProBook 450 G10', processeur: 'Intel Core i7', memoire: 32, disque: 1000, carteGraphique: 'NVIDIA GeForce MX', photo: '/images/hp.jpg' },
  { id: 3, modele: 'Lenovo ThinkPad E14', processeur: 'AMD Ryzen 5', memoire: 16, disque: 512, carteGraphique: 'Radeon Graphics', photo: '/images/lenovo.jpg' },
  { id: 4, modele: 'ASUS TUF Gaming F15', processeur: 'Intel Core i7', memoire: 32, disque: 1000, carteGraphique: 'NVIDIA GeForce RTX', photo: '/images/asus.jpg' },
  { id: 5, modele: 'Acer Aspire 5', processeur: 'Intel Core i5', memoire: 8, disque: 256, carteGraphique: 'Intel UHD Graphics', photo: '/images/acer.jpg' },
]

export const STORAGE_KEY = 'parc-informatique-ordinateurs'
