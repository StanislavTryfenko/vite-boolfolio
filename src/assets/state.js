import { reactive } from 'vue'

export const state = reactive({
    backend: 'http://127.0.0.1:8000/api/',
    projects: [],
    skills: [],
    project: [],
})
