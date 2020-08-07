import React from 'react';
import { Works } from '../../store/data/projects';
import { checkImage, flatten, imagePlaceholder } from '../../hooks/Utils';


const groupByProjects = (projects, prop) => {
    var projectArray = projects.reduce((acc, obj) => {
        if(obj[prop]) acc.push(obj[prop])
        if(obj.clients) acc.push((obj.clients)[0][prop])
        return acc.filter(x => x !== undefined)
    }, [])
    return flatten(projectArray)
}

let Projects = groupByProjects(Works, 'projects');

const Gallery = () => (
    <div className="masonry">
        {
            Projects.map((item, index) => (
                <div className="masonry__brick" key={index}>
                    <div className="item-folio">
        
                        <div className="item-folio__thumb">
                            <a href={checkImage(item.image, true) || imagePlaceholder(item.image[1], [1050, 700], [1050, 700])} className="thumb-link" title={item.image[1]} data-size="1050x700">
                                <img src={checkImage(item.image, false) || imagePlaceholder(item.image[1], [500, 300], [300, 200])} alt={item.image[2]} />
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