export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomColor = () =>(Math.round(Math.random() * 0XFFFFFF)).toString(16);

export const flatten = (arr) => {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
}

export const imagePlaceholder = (title, [width, height]) => {
    const [hmax, hmin, wmax, wmin] = [...height, ...width];
    const placeholderImage = `https://via.placeholder.com/${getRandomInt(wmax, wmin)}x${getRandomInt(hmax, hmin)}/${getRandomColor()}/${getRandomColor()}?text=${title}`;
    return placeholderImage;
}

export const checkImage = (img, gallery) => {
    const url_image = `images/portfolio/${gallery ? 'gallery/g-' : ''}${img[0]}.jpg`;
    const fetchPromise = fetch(url_image);
    fetchPromise.then(res => {
        // console.log(res)
        return res
    }).then(res => {
        // console.log(url)
        var a = res.ok ? res.url : imagePlaceholder(img[1], [[200, 500], [200, 300]])
        // console.log(a);
        return a
    })
    // console.log(url)
}