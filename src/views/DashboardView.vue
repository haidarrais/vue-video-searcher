<script setup lang="ts">
import { ref } from 'vue';
import { useSearchStore } from '@/stores/search';
import CardItem from '../components/tiktok/CardItem.vue'

const searchState = useSearchStore()
const searchInput = ref<string[]>([]);
const newSearchTerm = ref('')

searchState.setSearch("pentol");
const handleSearch = () => {
  searchInput.value.forEach(term => {
  });
}

const addSearchTerm = (term: string) => {
  if (term && !searchInput.value.includes(term)) {
    searchInput.value.push(term);
  }
}

const removeSearchTerm = (index: number) => {
  searchInput.value.splice(index, 1);
}
</script>

<template>
  <main>
    <div class="w-full h-screen">
      <div class="flex rounded-md border-2 border-black overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input type="text" placeholder="Search Something..." v-model="newSearchTerm"
          v-on:keyup.enter="addSearchTerm(newSearchTerm)"
          class="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" />
        <button type='button' class="flex items-center justify-center bg-black px-5" @click="handleSearch">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" class="fill-white">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
        </button>
      </div>
      <div class="text-xl font-bold mt-10">Keywords: </div>
      <div class="mt-2 flex flex-wrap">
        <div class="flex flex-wrap justify-start">
          <span v-for="(term, index) in searchInput" :key="term"
            class="bg-red-100 text-black rounded-full px-3 py-1 mr-2 mb-2 flex items-center">
            <span>
              {{ term }}
            </span>
            <button @click="removeSearchTerm(index)" class="ml-2 hover:text-black font-bold text-red-500 text-sm">X</button>
          </span>
        </div>
      </div>
      <div class="mt-4 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
        <div v-for="post in searchState.result" :key="post.url">
          <CardItem :post="post" />
        </div>
      </div>
    </div>
  </main>
</template>
