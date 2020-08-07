export const getRandomInt = (range) => {
    var [min, max] = [...range]
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomColor = () =>(Math.round(Math.random() * 0XFFFFFF)).toString(16);

export const flatten = (arr) => {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
}

export const imagePlaceholder = (title, width, height, fColor, bColor) => {
    if(!fColor) fColor = getRandomColor();
    if(!bColor) bColor = getRandomColor();
    if(width.length === 2) width = getRandomInt(width)
    if(height.length === 2) height = getRandomInt(height)
    return `https://via.placeholder.com/${width}x${height}/${fColor}/${bColor}?text=${title}`;
}

export const checkImage = (img, gallery) => {
    if(img[0] || img[0] !== "") return `images/portfolio/${gallery ? 'gallery/g-' : ''}${img[0]}.jpg`;
    return false
}