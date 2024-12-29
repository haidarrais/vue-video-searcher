import type { RootObject } from "./type";

async function fetchVideos(keyword: string) {
    try {
        const response = await fetch(`/search?keyword=${keyword}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json() as RootObject;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

export default fetchVideos;
