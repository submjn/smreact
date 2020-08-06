import React from 'react';
import { Works } from '../../store/data/projects';

function groupByProjects(projects, prop) {
    // const props = prop.split(", ");
    const acc = projects.map(item => item['projects'])
    // console.log(projects)
    // projects.reduce((acc, obj) => {
    //     if(!acc[props[0]]) acc[props[0]] = []
    //     if(obj[props[0]]) {
    //         // console.log(obj[props[0]])
    //         acc[props[0]].push(obj[props[0]])
    //     }
    //     if(obj[props[1]]) {
    //         let projects = obj[props[1]]
    //         projects.forEach(project => {
    //             console.log(project)
    //             acc[props[0]].push(project)
    //         })
    //     } 
    //     // console.log(acc[props[0]])
    //     return acc
    // })
    return acc
}

let Projects = groupByProjects(Works, 'projects');
console.log(Projects)
const Gallery = () => (
    <div className="masonry">
                   
    </div>
)

export default Gallery;