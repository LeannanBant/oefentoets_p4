let btn = document.querySelector(".clicky");
btn.addEventListener("click", FuncQuestion);



function FuncQuestion() {
    let question = prompt ("Typ een van de drie kleuren (red,green,blue)");

    if (question === 'red') {
        document.querySelector(".kleur").classList.add("red");
    } else if (question === 'green'){
        document.querySelector(".kleur").classList.add("green");
    } else if (question === 'blue') {
        document.querySelector(".kleur").classList.add("blue");
    } else {
        alert("it doesn't works!");
    };
};

