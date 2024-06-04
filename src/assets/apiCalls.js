import axios from "axios";
import { state } from './state.js';
import router from "../route.js"; 
 

export function callApiProjects(url) {
    axios.get(url)
        .then((response) => {
            state.projects = response.data.projects;
            console.log(state.projects);
        })
        .catch((error) => {
            console.log(error, "Projects error");
        });
}

export function callApiProject(url) {
    axios.get(url)
        .then((response) => {
            if (response.data.success) {
                state.project = response.data.response;
                //console.log(state.project);
            }  else {
                router.push( { name: 'not-found' } );
            } 
        })
        .catch((error) => {
            console.log(error, "Project error");
        });
}

export function callApiSkills(url) {
    axios.get(url)
        .then((response) => {
            state.skills = response.data.technologies;
            //console.log(state.skills);
        })
        .catch((error) => {
            console.log(error, "Skills error");
        });
}