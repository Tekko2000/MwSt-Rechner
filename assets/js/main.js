let eingabe = document.getElementById("enter");
let netto = document.getElementById("netto");
let brutto = document.getElementById("brutto");
let seven = document.getElementById("seven");
let nineteen = document.getElementById("nineteen")
let percentToGet = 7;
let percentToGet1 = 19;
let resultNetto = document.getElementById("betrag");
let resultBrutto = document.getElementById("endpreis");
let net = document.getElementById("net")
let brut = document.getElementById("brut")

function calc() {
    let percent1 = (percentToGet1 / 100) * eingabe.value
    let percent = (percentToGet / 100) * eingabe.value;
    if (netto.checked) {
        net.innerHTML = "Nettobetrag (Preis ohne MwSt) in Euro"
        brut.innerHTML = "Bruttobetrag (Endpreis)"
        if (nineteen.checked) {
            resultNetto.innerHTML = percent1.toFixed(2) + "\u20AC";
            resultBrutto.innerHTML = percent1 * 1 + eingabe.value * 1 + "\u20AC";
        } else {
            resultNetto.innerHTML = percent.toFixed(2) + "\u20AC";
            resultBrutto.innerHTML = percent * 1 + eingabe.value * 1 + "\u20AC";
        }
    } else {
        net.innerHTML = "Bruttobetrag (Preis inkl. MwSt) in Euro"
        brut.innerHTML = "Nettobetrag"
        if (nineteen.checked) {
            resultNetto.innerHTML = percent1.toFixed(2) + "\u20AC";
            resultBrutto.innerHTML = (eingabe.value / 1.19).toFixed(2) + "\u20AC"
            betrag.innerHTML = (eingabe.value - (eingabe.value / 1.19)).toFixed(2) + "\u20AC"
        } else {
            resultNetto.innerHTML = percent.toFixed(2) + "\u20AC";
            resultBrutto.innerHTML = (eingabe.value / 1.07).toFixed(2) + "\u20AC"
            betrag.innerHTML = (eingabe.value - (eingabe.value / 1.07)).toFixed(2) + "\u20AC"
        }

    }
}


