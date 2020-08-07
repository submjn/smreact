export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomColor = () =>(Math.round(Math.random() * 0XFFFFFF)).toString(16);

export const flatten = (arr) => {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
}

export const imagePlaceholder = (title, width, height) => {
    const [hmax, hmin, wmax, wmin] = [...height, ...width];
    const placeholderImage = `https://via.placeholder.com/${getRandomInt(wmax, wmin)}x${getRandomInt(hmax, hmin)}/${getRandomColor()}/${getRandomColor()}?text=${title}`;
    return placeholderImage;
}

export const checkImage = (img, gallery) => {
    if(img[0] || img[0] !== "") return `images/portfolio/${gallery ? 'gallery/g-' : ''}${img[0]}.jpg`;
    return false
}