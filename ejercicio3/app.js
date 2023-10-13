/**
 * Ejercicio 3
 *
 */
document.addEventListener("DOMContentLoaded", function () {
    let listaAnimales = ["https://okdiario.com/img/2020/02/09/jeff-griffith-zqypm8i60f8-unsplash1.jpg",
        "https://hospitalveterinariodonostia.com/wp-content/uploads/2018/12/6-lugares-donde-puedes-ver-animales-exoticos-6.jpg",
        "https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-760w/public/images/article/cover/2018/04/19/tigre-caminando.jpg?ramen_itok=iqwQftIcTf",
        "https://static.nationalgeographic.es/files/styles/image_3200/public/01WAQbigeyes.webp?w=1280&h=720",
        "https://cope-cdnmed.cope.es/resources/jpg/5/5/1589941723955.jpg",
        "https://t1.ea.ltmcdn.com/es/posts/7/1/5/los_35_animales_mas_tiernos_del_mundo_24517_600_square.jpg",
        "https://image.ondacero.es/clipping/cmsimages01/2023/01/03/26929100-8B54-4094-82D6-531ED6B614C2/mascotas-prohibidas-tener-casa_98.jpg?crop=1920,1080,x0,y195&width=1900&height=1069&optimize=high&format=webply",
        "https://www.publico.es/yo-animal/wp-content/uploads/2023/04/capibaras-4.jpg"];

    let animalesBorrados = [];

    const array1 = document.getElementById('array1');
    const array2 = document.getElementById('array2');
    const imagenesBorradas = document.getElementById('imagenesBorradas');

    for (const imageUrl of listaAnimales) {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.style.maxWidth = "150px";
        img.style.maxHeight = "250px";
        array1.appendChild(img);
        img.addEventListener("click", moverImagenAArray2);
    }

    function moverImagenAArray2(evento) {
        const imagenClicada = evento.target;
        const imagenSrc = imagenClicada.src;

        // se crea elemento img
        const img2 = document.createElement("img");
        img2.src = imagenSrc;
        img2.style.maxWidth = "150px";
        img2.style.maxHeight = "250px";
        array2.appendChild(img2);

        // se anade al segundo array
        animalesBorrados.push(imagenSrc);

        //se borra del primer array
        const index = listaAnimales.indexOf(imagenSrc);
        if (index > -1) {
            listaAnimales.splice(index, 1);
        }

        // se borra del dom
        imagenClicada.remove();

        // se crea div para mostrar imagen borrada
        const imagenBorradaDiv = document.createElement("div");
        imagenBorradaDiv.textContent = `Borrada: ${imagenSrc}`;
        console.log(`Borrada: ${imagenSrc}`);

        imagenesBorradas.appendChild(imagenBorradaDiv);



    }

});




