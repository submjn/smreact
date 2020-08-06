import React from 'react';
import { Works } from '../../store/data/projects';
import { checkImage, flatten } from '../../hooks/Utils';


const groupByProjects = (projects, prop) => {
    var arr = projects.map(item => item[prop]).filter(x => x !== undefined)
    var arr2 = projects.map(item => item.clients).filter(x => x !== undefined)
    arr2 = arr2.map(item => item[0][prop]).filter(x => x!== undefined)
    arr = arr.concat(arr2)
    // console.log(arr)
    return flatten(arr)
}

let Projects = groupByProjects(Works, 'projects');
let imageList = () => {
    var arr = []
    Projects.map((item) => {
        console.log(item.image[0])
        return arr.push([checkImage(item.image, true), checkImage(item.image, false)])
    })
    return arr;
}

console.log(imageList())

const Gallery = () => (
    <div className="masonry">
        {
            Projects.map((item, index) => (
                <div className="masonry__brick" key={index}>
                    <div className="item-folio">
        
                        <div className="item-folio__thumb">
                            <a href={checkImage(item.image, true)} className="thumb-link" title={item.image[1]} data-size="1050x700">
                                <img src={checkImage(item.image, false)} alt={item.image[2]} />
                                <span className="shadow-overlay"></span>
                            </a>
                        </div>
        
                        <div className="item-folio__text">
                            <h3 className="item-folio__title">
                                {item.title}
                            </h3>
                            <p className="item-folio__cat">
                                {item.category}
                            </p>
                        </div>
        
                        <a href={item.link[0]} className="item-folio__project-link" title={item.link[1]}>
                            <i className="im im-link"></i>
                        </a>
        
                        <div className="item-folio__caption">
                            <p>{item.caption}</p>
                        </div>
        
                    </div>
                </div>
            ))
        }              
    </div>
)

export default Gallery;