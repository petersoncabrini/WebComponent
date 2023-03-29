class Cardnews extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({
            mode: "open"
        })
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {

        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "left-side");

        const autor = document.createElement("span");
        autor.textContent = "By: " + (this.getAttribute("autor") || "Anonymous");

        const linkTitulo = document.createElement("a");
        linkTitulo.textContent = this.getAttribute("titulo");
        linkTitulo.href = this.getAttribute("url") || "#";

        const conteudo = document.createElement("p");
        conteudo.textContent = this.getAttribute("conteudo");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitulo);
        cardLeft.appendChild(conteudo);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "right-side");

        const imagemNoticia = document.createElement("img");
        imagemNoticia.setAttribute("class", "card-image");
        imagemNoticia.src = this.getAttribute("src") || "assets/default.jpg"

        cardRight.appendChild(imagemNoticia);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    style() {

        const style = document.createElement("style");
        style.textContent = `
        .card {
            width: 70%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-radius: 10px;
        
            -webkit-box-shadow: 9px 10px 22px -6px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 9px 10px 22px -6px rgba(0, 0, 0, 0.75);
            box-shadow: 9px 10px 22px -6px rgba(0, 0, 0, 0.75);
        }
        
        .left-side {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 15px;
        }
        
        .left-side > span {
            font-weight: 400;
        }

        .left-side > a {
            text-decoration: none;
            color: black;
            margin-top: 10px;
            font-size: 25px;
        }
        
        .left-side > p {
            color: gray;
        }
        
        .right-side {
            display: flex;
            justify-content: center;
        }
        
        .card-image {
            width: 320px;
            height: 200px;
            border-radius: 10px;
        }
        `

        return style;
    }
}

customElements.define("card-news", Cardnews)