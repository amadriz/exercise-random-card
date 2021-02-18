window.onload = function() {
    // Esta variable invoca la funcion random icos para que el class list sea igual.
    let icono = randomIcons();

    document.querySelector(".topIcon").classList.add(icono);
    document.querySelector(".bottomIcon").classList.add(icono);
    document.querySelector(".number").innerHTML = randomNumber();

    function randomNumber() {
        let numbers = [
            "A",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "J",
            "Q",
            "K"
        ];

        let indexNumbers = Math.floor(Math.random() * numbers.length);

        return numbers[indexNumbers];
    }

    // console.log(randomNumber());

    function randomIcons() {
        let icons = ["spade", "heart", "club", "diamond"];

        let indexIcons = Math.floor(Math.random() * icons.length);

        return icons[indexIcons];
    }

    // console.log(randomIcons());
};