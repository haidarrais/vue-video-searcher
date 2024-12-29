import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import fetchVideos from '../api/video/index.ts' // Assuming there's an API call to fetch videos

export const useSearchStore = defineStore('search', () => {
  const search = ref('')
  const result = ref()

  function setSearch(newSearch: string) {
    search.value = newSearch
  }

  watch(search, async (newSearch) => {
    if (newSearch) {
      try {
        const videos = await fetchVideos(newSearch)
        result.value = videos?.data
      } catch (error) {
        console.error('Error fetching videos:', error)
      }
    }
  })

  return { search, result, setSearch }
})
