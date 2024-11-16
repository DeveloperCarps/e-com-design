const components = [
    {
        name: 'hero-slide',
        class: class HeroSlide extends HTMLElement {
            static observedAttributes = ['title', 'subtitle', 'image'];
            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
            }
            connectedCallback() {
                this.shadowRoot.innerHTML = `
                    <style>
                        :host {
                            width: 100%;
                            height: 100%;
                            padding: 40px;
                            background: rgb(0,0,0);
                            background: linear-gradient(0deg, rgba(0,0,0,0.6572829815519958) 30%, rgba(255,255,255,0) 94%); 

                            display: flex;
                            flex-flow: column nowrap;
                            justify-content: end;
                            align-items: start;
                            background-image: url(${this.image});
                            background-position: center;
                            background-repeat: no-repeat;
                            background-size: cover;
                        }
                        .slide {
                            width: 100%;
                            flex-shrink: 0;
                            height: 100%;
                            scroll-snap-align: start;
                            background-position: center;
                            background-repeat: no-repeat;
                            background-size: cover;
                        }
                        .slide-header {
                            color: white;
                            font-size: 4em;
                            font-weight: 800;
                            margin: 0;
                        }
                        .slide-span {
                            color: white;
                            font-size: 1.2em;
                            font-weight: 500;
                            margin: 0;
                        }
                        .hero-button {
                            margin-top: 20px;
                            padding: 15px 30px;
                            width: fit-content;

                            display: block;
                            background-color: #ffda59;
                            border: none;
                            border-radius: 5px;
                            cursor: pointer;
                            color: #091423;
                            font-size: 1em;
                            font-weight: 500;
                            outline: none;
                            text-decoration: none;
                        }
                    </style>
                    <div class="content">
                        <h1 class="slide-header">${this.title}</h1>
                        <span class="slide-span">${this.subtitle}</span>
                        <a id="${this.id}" class="hero-button">Shop now</a>
                    </div>
                `;
            }
            attributeChangedCallback(name, oldValue, newValue) {
                if (name === 'title') {
                    this.title = newValue;
                }
                if (name === 'subtitle') {
                    this.subtitle = newValue;
                }
                if (name === 'image') {
                    this.image = newValue;
                }
            }
        }
    },
    {
        name: 'product-card',
        class: class ProductCard extends HTMLElement {
            static observedAttributes = ['title', 'desc', 'image', 'id', 'price'];
            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
            }
            connectedCallback() {
                this.shadowRoot.innerHTML = `
                    <style>
                        :host {
                            margin: 0 10px;
                        }
                        .card {
                            width: 250px;
                            height: 400px;
                            background-color: white;
                            border-radius: 5px;
                            border: 1px solid #e0e0e0;
                            display: flex;
                            flex-direction: column;
                            align-items: start;
                            justify-content: start;
                            padding: 15px;
                        }
                        a {
                            box-sizing: border-box;
                            background-color: #091423;
                            color: white;
                            padding: 10px;
                            border-radius: 5px;
                            text-decoration: none;
                            margin-top: auto;
                            font-size: 1rem;
                            width: 100%;
                            text-align: center;
                            cursor: pointer;
                        }
                        .image {
                            display: block;
                            background-image: url(${this.image});
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                            width: 100%;
                            height: auto;
                            aspect-ratio: 1/1;
                        }
                        h3 {
                            font-size: 1.5rem;
                            margin: 10px 0 0 0;
                        }
                        .pricing {
                            margin-top: auto;
                            display: grid;
                            width: 100%;
                            grid-template-columns: 1fr 40px;
                            height: 40px;

                            & a {
                                background: none;
                                border: 1px solid #e0e0e0;
                                color: white;
                                padding: 5px;
                                border-radius: 5px;
                                text-decoration: none;
                                font-size: 1rem;
                                text-align: center;
                                cursor: pointer;
                                height: 100%;

                                display: flex;
                                align-items: center;
                                justify-content: center;

                                & img {
                                    width: 20px;
                                    height: 20px;
                                    box-sizing: border-box;
                                }
                            }

                            & p {
                                margin: 0;
                                font-size: 1.75rem;
                                display: flex;
                                align-items: center;
                                justify-content: start;
                            }
                        }
                        span {
                            font-size: 1rem;
                            margin: 10px 0;
                        }
                    </style>
                    <div class="card">
                        <div class="image"></div>
                        <h3>${this.title}</h3>
                        <span>${this.desc}</span>
                        <div class="pricing">
                            <p>${this.price}</p>
                            <a id=${this.id}>
                                <img src="assets/plus.svg"></img>
                            </a>
                        </div>
                    </div>
                `;
            }
            attributeChangedCallback(name, oldValue, newValue) {
                if (name === 'title') {
                    this.title = newValue;
                }
                if (name === 'desc') {
                    this.desc = newValue;
                }
                if (name === 'image') {
                    this.image = newValue;
                }
                if (name === 'id') {
                    this.id = newValue;
                }
                if (name === 'price') {
                    this.price = newValue;
                }
            }

        }
    }
];
components.forEach(component => {
    customElements.define(component.name, component.class);
});

function slides() {

}