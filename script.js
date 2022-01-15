(() => {
    const generate = document.querySelector('.generate');
    const button = document.querySelector('button');
    const butonImg = document.querySelector('.imgButton');
    const text = [
        ["Polska ", "Ameryka ", "Rosja ", "Francja ", "Heartland "],

        ["w sferze deklaratywnej ", "tak jak systemy antydostêpowe ", "tak jak Mackinder ", "potencjalnie ", "tak jak amerykañski Junior Partner"],

        ["piwotuje na Pacyfik, ", "bêdzie jêzyczkiem u wagi, ", "nas zdradzi, ", "bêdzie walczyæ o pomost ba³tycko-czarnomorski, ", "odda masy l¹dowe Euroazji, "],

        ["ale nowa architektura bezpieczeñstwa ", "a przep³yw strategiczny ", "jednak pamiêtajmy, ¿e Zachód nie istnieje, ", "a przesmyk suwalski ", "a Ocean Œwiatowy "],

        ["to projekcja si³y.", "bêdzie obiektem walki koncertu mocarstw.", "to tak naprawdê System Atlantycki.", "to Druga Ja³ta.", "to ³ad konstruktywistyczny."]
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
