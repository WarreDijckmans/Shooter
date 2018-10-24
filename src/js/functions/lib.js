export const random = (min = 0, max = 1)=>{
    return Math.random() * (max-min) + min;
}

export const loadImage = url => {
    return new Promise((response, reject)=>{
        const image = new Image();
        image.addEventListener(`load`, e => response(image));
        image.addEventListener(`error`, e => reject(e));
        image.setAttribute(`src`, url);
        if(image.complete){
            response(image);
        }
    });
}

export const loadImageInCatalog = (url, id, catalog)=>{
    return new Promise((response, reject)=>{
        catalog[id] = new Image();
        catalog[id].addEventListener(`load`, event =>response(catalog[id]));
        catalog[id].addEventListener(`error`, event => reject(event));
        catalog[id].setAttribute('src', url);
        if(catalog[id].complete){
            response(catalog[id]);
        };
    });
}