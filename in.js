const copyQuote = () =>{
    let quoteText = document.getElementById("quote-text").innerHTML;
    navigator.clipboard.writeText(quoteText);
};

const generateQuote = () => {
    let url = "https://type.fit/api/quotes";
    fetch(url)

    .then(function (res)  {
        return res.json();
    })

    .then(function (data) {
        
        let randNumber = Math.floor(Math.random() * 16 + 1);

        let randomQuote = data[randNumber];
        document.getElementById("quote-text").innerHTML = `${randomQuote.text ? randomQuote.text : "" }`;

        document.getElementById("author").innerHTML =`-${randomQuote.author ? randomQuote.author : ""}`;
    });
};