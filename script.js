(() => {
    const generate = document.querySelector('.generate');
    const button = document.querySelector('button');
    const butonImg = document.querySelector('.imgButton');
    const text = [
        ["Polska ", "Ameryka ", "Rosja ", "Francja ", "Heartland "],

        ["w sferze deklaratywnej ", "tak jak systemy antydostępowe ", "tak jak Mackinder ", "potencjalnie ", "tak jak amerykański Junior Partner"],

        ["piwotuje na Pacyfik, ", "będzie języczkiem u wagi, ", "nas zdradzi, ", "będzie walczyć o pomost bałtycko-czarnomorski, ", "odda masy lądowe Euroazji, "],

        ["ale nowa architektura bezpieczeñstwa ", "a przepływ strategiczny ", "jednak pamiętajmy, że Zachód nie istnieje, ", "a przesmyk suwalski ", "a Ocean Światowy "],

        ["to projekcja siły.", "będzie obiektem walki koncertu mocarstw.", "to tak naprawdę System Atlantycki.", "to Druga Jałta.", "to ład konstruktywistyczny."]
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
