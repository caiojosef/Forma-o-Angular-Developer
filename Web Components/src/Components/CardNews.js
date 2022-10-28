class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build (){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");
        const cardLeft = document.createElement("div");
        componentRoot.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const link = document.createElement("a");
        link.textContent = this.getAttribute("title");
        link.href = this.getAttribute("link-url")
        const news = document.createElement("p");
        news.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(link);
        cardLeft.appendChild(news);
        
        const cardRight = document.createElement("div");
        componentRoot.setAttribute("class", "card__right");

        const imagem = document.createElement("img");
        imagem.src = this.getAttribute("photo") || "assets/default.jpg";
        imagem.alt = "Foto Darth Vader";
        
        cardRight.appendChild(imagem);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot;
    }

    styles(){
        const styles = document.createElement("style");
        styles.textContent = `
        .card{
            width: 60%;
            border: 1px solid gray;
            display: flex;
            flex-direction: row;
            box-shadow: 3px -2px 15px -2px #000000;
            justify-content: space-between;
        }

        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left > span {
            font-weight: bold;
        }
        
        .card__left > h1 {
            margin-top: 10px;
            font-size: 25px;
        }
        
        .card__left > p {
            color: gray;
        
        }
        `;
        return styles;
    }
}

customElements.define("card-news", CardNews);