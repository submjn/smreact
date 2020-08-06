import React from 'react';
import { Works } from '../../store/data/projects';

function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }
function groupByProjects(works, prop) {
    const arr = works.map(item => item.projects ? item.projects : [])
    const arr2 = works.map(item => item.clients ? item.clients : [])
    const arr3 = arr2.map(item => item.projects ? item.projects : [])
    const newArr = arr3.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
    newArr.concat(arr)
    const newArr2 =  newArr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
    console.log(newArr2)
    return newArr2
}

let Projects = groupByProjects(Works, 'projects');
// console.log(Projects)
const Gallery = () => (
    <div className="masonry">
        {
            Projects.map((item, index) => (
                <div className="masonry__brick" key={index}>
                    <div className="item-folio">
        
                        <div className="item-folio__thumb">
                            <a href={`images/portfolio/gallery/g-${item.image[0]}.jpg`} className="thumb-link" title={item.image[1]} data-size="1050x700">
                                <img src={`images/portfolio/${item.image[0]}.jpg`} alt={item.image[2]} />
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