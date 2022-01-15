(() => {
    const generate = document.querySelector('.generate');
    const button = document.querySelector('button');
    const butonImg = document.querySelector('.imgButton');
    const text = [
        ["Polska ", "Ameryka ", "Rosja ", "Francja ", "Heartland "],

        ["w sferze deklaratywnej ", "tak jak systemy antydost�powe ", "tak jak Mackinder ", "potencjalnie ", "tak jak ameryka�ski Junior Partner"],

        ["piwotuje na Pacyfik, ", "b�dzie j�zyczkiem u wagi, ", "nas zdradzi, ", "b�dzie walczy� o pomost ba�tycko-czarnomorski, ", "odda masy l�dowe Euroazji, "],

        ["ale nowa architektura bezpiecze�stwa ", "a przep�yw strategiczny ", "jednak pami�tajmy, �e Zach�d nie istnieje, ", "a przesmyk suwalski ", "a Ocean �wiatowy "],

        ["to projekcja si�y.", "b�dzie obiektem walki koncertu mocarstw.", "to tak naprawd� System Atlantycki.", "to Druga Ja�ta.", "to �ad konstruktywistyczny."]
    ]

    lottery = number => {
        let draw;
        draw = Math.random() * text[number].length;
        draw = Math.floor(draw);

        return text[number][draw];
    }

    crateText = () => {
        generate.textContent = null;
        for (let i = 0; i < text.length; i++) {
            generate.textContent += lottery(i);
        }
    }

    button.addEventListener("click", (e) => {
        crateText();
        butonImg.classList.add('rotate')
    }, false)

    button.addEventListener("touch", (e) => {
        crateText();
        butonImg.classList.add('rotate')
    }, false)

    butonImg.addEventListener("animationend", (e) => {
        butonImg.classList.remove('rotate')
    }, false)

    crateText();
})();