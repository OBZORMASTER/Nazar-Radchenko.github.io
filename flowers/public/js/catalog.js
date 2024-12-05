document.addEventListener("DOMContentLoaded", () => {
    const catalogData = [
        { img: "./img/bouquet_cart11.png", alt: "Лілії_троянди", title: "Ніжна свіжість: троянди та лілії", price: "445 грн" },
        { img: "./img/bouquet_cart21.png", alt: "Хризантеми_троянди", title: "Сорбет: хризантеми та троянди", price: "450 грн" },
        { img: "./img/bouquet_cart31.png", alt: "Соняшник_солідаго", title: "Yellow Song: соняшники та солідаго", price: "455 грн" },
        { img: "./img/bouquet_cart41.png", alt: "Лілії_троянди2", title: "Персиковий нектар: лілії та троянди", price: "455 грн" },
        { img: "./img/bouquet_cart51.png", alt: "Лілії_троянди3", title: "Аврора: лілії та троянди", price: "460 грн" },
        { img: "./img/bouquet_cart61.png", alt: "Троянди", title: "Класика кохання: червоних троянд", price: "465 грн" }
    ];

    const catalogContainer = document.querySelector('.catalog');

    catalogContainer.innerHTML = catalogData.map(item => `
        <div class="catalog_item">
            <a href="#"><img src="${item.img}" alt="${item.alt}"></a>
            <div class="catalog_text">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
            </div>
        </div>
    `).join('');
});
