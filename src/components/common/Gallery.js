import React from 'react';

const company = {
    ENVIRO: 'Enviroapps', 
    SILVERCHAIR: 'Silverchair', 
    DMI: 'Digital Management', 
    UPDATER: 'Vertical One', 
    SABRE: 'Sabre Systems', 
    BODHI: 'Bodhi Systems'
}

const category = {
    WEB: 'Web Development',
    MOBILE: 'Mobile Development',
}

const projects = [
    {
        id: 1,
        company: company.ENVIRO,
        title: 'EAPHARMICS',
        image: { gallery: 'images/portfolio/gallery/g-beetle.jpg', src: 'images/portfolio/beetle.jpg' },
        link: 'https://www.behance.net/',
        category: category.WEB,
        caption: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.'
    },
    {
        id: 2,
        company: company.SILVERCHAIR,
        title: 'McGrawHill-Medical',
        image: { gallery: 'images/portfolio/gallery/g-salad.jpg', src: 'images/portfolio/salad.jpg' },
        link: 'https://www.behance.net/',
        category: category.WEB,
        caption: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.'
    },
    {
        id: 3,
        company: company.SILVERCHAIR,
        title: 'Wolter-Kluwer',
        image: { gallery: 'images/portfolio/gallery/g-minimalismo.jpg', src: 'images/portfolio/minimalismo.jpg' },
        link: 'https://www.behance.net/',
        category: category.WEB,
        caption: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.'
    },
    {
        id: 4,
        company: company.SILVERCHAIR,
        title: 'Journal of American Medical Association',
        image: { gallery: 'images/portfolio/gallery/g-shutterbug.jpg', src: 'images/portfolio/shutterbug.jpg' },
        link: 'https://www.behance.net/',
        category: category.WEB,
        caption: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.'
    },
    {
        id: 5,
        company: company.SILVERCHAIR,
        title: 'American Society of Mechanical Engineers',
        image: { gallery: 'images/portfolio/gallery/g-skaterboy.jpg', src: 'images/portfolio/skaterboy.jpg' },
        link: 'https://www.behance.net/',
        category: category.WEB,
        caption: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.'
    },
    {
        id: 6,
        company: company.DMI,
        title: 'USDA Market News',
        image: { gallery: 'images/portfolio/gallery/g-woodcraft.jpg', src: 'images/portfolio/woodcraft.jpg' },
        link: 'https://www.behance.net/',
        category: category.WEB,
        caption: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.'
    },
    {
        id: 7,
        company: company.UPDATER,
        title: 'Insurance Flow',
        image: { gallery: 'images/portfolio/gallery/g-lighthouse.jpg', src: 'images/portfolio/lighthouse.jpg' },
        link: 'https://www.behance.net/',
        category: category.WEB,
        caption: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.'
    },
    {
        id: 18,
        company: company.SABRE,
        title: 'Data.Census.Gov',
        image: { gallery: 'images/portfolio/gallery/g-liberty.jpg', src: 'images/portfolio/liberty.jpg' },
        link: 'https://www.behance.net/',
        category: category.WEB,
        caption: 'Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.'
    }
];

const Gallery = () => (
    <div className="masonry">
        {
            projects.map(item => (
                <div className="masonry__brick" key={item.id}>
                    <div className="item-folio">
        
                        <div className="item-folio__thumb">
                            <a href={item.image.gallery} className="thumb-link" title={item.title} data-size="1050x700">
                                <img src={item.image.src} alt="" />
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
        
                        <a href={item.link} className="item-folio__project-link" title="Project link">
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