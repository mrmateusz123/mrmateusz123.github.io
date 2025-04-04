function Przeslij(event){
    event.preventDefault();
    let imie = document.getElementById("imie").value;
    let nazwisko = document.getElementById("nazwisko").value;
    let email = document.getElementById("email").value;
    let zgloszenie = document.getElementById("zgloszenie").value;

    let tresc = document.getElementById("tresc");
    let zaznaczenieZapoznania = document.getElementById("zaznaczenie").checked;
    if (!zaznaczenieZapoznania){
        tresc.innerText = "Musisz zapoznac sie regulaminem";
        tresc.setAttribute("style", "color:red");
    } else {
        tresc.innerHTML = imie.toUpperCase() + " " + nazwisko.toUpperCase() + "<br> Tresc twojej sprawy: " + zgloszenie;
        tresc.setAttribute("style", "color:navy");
    }
}
function Resetuj(){
    let tresc = document.getElementById("tresc");
    tresc.innerHTML = "";
}