<template>
    <div @click="displayPost(post)" @mouseenter="isHover(true)" @mouseleave="isHover(false)"
        class="relative brightness-90 hover:brightness-[1.1] cursor-pointer">
        <div v-if="!isLoaded"
            class="absolute flex items-center justify-center top-0 left-0 aspect-[3/4] w-full object-cover rounded-md bg-black">
            <Icon class="animate-spin ml-1" name="mingcute:loading-line" size="100" color="#FFFFFF" />
        </div>
        <div>
            <video ref="video" controls preload="auto" class="aspect-[3/4] object-cover rounded-md">
                <source :src="'https://www.tikwm.com/video/media/play/' + post.url.split('video')[1] + '.mp4'"
                    type="video/mp4" />
            </video>
        </div>
        <div class="px-1">
            <div
                class="text-gray-700 text-[15px] pt-1 break-words h-[30px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                {{ post.title }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, onBeforeUnmount } from 'vue';

defineProps(['post'])

const router = useRouter()

let video = ref(null)
let isLoaded = ref(false)

onMounted(() => {
    if (video.value) {
        video.value.addEventListener('loadeddata', (e) => {
            if (e.target) {
                setTimeout(() => {
                    isLoaded.value = true
                }, 200)
            }
        });
    }
})

onBeforeUnmount(() => {
    video.value.pause()
    video.value.currentTime = 0
    video.value.src = ''
})

const displayPost = (post) => {
    setTimeout(() => router.push(`/post/${post.id}`), 300)
}

const isHover = (bool) => {
    if (bool) {
        video.value.play()
    } else {
        video.value.pause()
    }
}
</script>