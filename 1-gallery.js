import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as t}from"./assets/vendor-CgTBfC_f.js";const i=[{preview:"https://placehold.co/300x200",original:"https://placehold.co/1200x800",description:"Image 1"},{preview:"https://placehold.co/300x200?text=2",original:"https://placehold.co/1200x800?text=2",description:"Image 2"}],o=document.querySelector(".gallery"),r=i.map(({preview:l,original:a,description:e})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${a}">
        <img class="gallery-image" src="${l}" alt="${e}" />
      </a>
    </li>`).join("");o.innerHTML=r;new t(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
