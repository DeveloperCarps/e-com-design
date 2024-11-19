function add_slide(image_url, title, subtitle, id) {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('content');

    let div = document.createElement('div');
    let header = document.createElement("h1");
    let span = document.createElement("span");
    let anchor = document.createElement("a");

    div.classList.add('slide');
    header.classList.add('slide-header');
    span.classList.add('slide-span');
    anchor.classList.add('hero-button');

    div.style.backgroundImage = `url(${image_url})`;
    header.textContent = title;
    span.textContent = subtitle;
    anchor.textContent = 'Shop now';
    anchor.id = id;

    div.appendChild(header);
    div.appendChild(span);
    div.appendChild(anchor);

    containerDiv.appendChild(div);

    return containerDiv;
}

function add_product_card(image_url, title, desc, price, id) {
    const card = document.createElement("div");
    const image = document.createElement("div");

    image.style.backgroundImage = `url(${image_url})`;
    image.classList.add('image');
    card.classList.add('card');

    const h3 = document.createElement("h3");
    h3.textContent = title;

    const span = document.createElement("span");
    span.textContent = desc;

    const pricing = document.createElement("div");
    pricing.classList.add('pricing');

    const p = document.createElement("p");
    p.textContent = price;

    const buy_now = document.createElement("a");
    buy_now.textContent = 'Buy now';
    buy_now.id = id;

    const plus = document.createElement("a");
    plus.id = id;
    const img = document.createElement("img");
    img.src = 'assets/plus.svg';
    plus.appendChild(img);

    pricing.appendChild(p);
    pricing.appendChild(buy_now);
    pricing.appendChild(plus);

    card.appendChild(image);
    card.appendChild(h3);
    card.appendChild(span);
    card.appendChild(pricing);

    return card;
}

const hero = document.getElementById('hero');
hero.appendChild(add_slide('assets/one.jpg', 'New Collection', 'Summer 2021', 'hero1'));

const products = document.getElementById('new_arrivals');
products.appendChild(add_product_card('assets/1.jpeg', 'Product 1', 'Description', 'PHP 13,500', 'product1'));

products.appendChild(add_product_card('assets/2.jpeg', 'Product 2', 'Description', 'PHP 7,250', 'product2'));

products.appendChild(add_product_card('assets/3.jpeg', 'Product 3', 'Description', 'PHP 9,900', 'product3'));

const popular = document.getElementById('popular');

popular.appendChild(add_product_card('assets/4.jpeg', 'Product 4', 'Description', 'PHP 5,500', 'product4'));

popular.appendChild(add_product_card('assets/5.jpeg', 'Product 5', 'Description', 'PHP 8,500', 'product5'));

popular.appendChild(add_product_card('assets/6.jpeg', 'Product 6', 'Description', 'PHP 6,500', 'product6'));

