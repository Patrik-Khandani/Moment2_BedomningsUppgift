let städer = [];

document.addEventListener("DOMContentLoaded", () => {
    const formulär = document.getElementById("stadFormulär");
    formulär.addEventListener("submit", function(händelse) {
        händelse.preventDefault();
        läggTillStad();
    });
});

function läggTillStad() {
    let stad = document.getElementById("stadInput").value.trim();
    if (stad === "") return;

    städer.push(stad);
    document.getElementById("stadLista").value = städer.join(", ");
    document.getElementById("stadInput").value = "";

    let infoText = `Stad ${städer.length}: ${stad.toUpperCase()} börjar med '${stad.charAt(0).toUpperCase()}' och har ${stad.length} bokstäver.`;
    let stycke = document.createElement("p");
    stycke.textContent = infoText;
    document.getElementById("stadInfo").appendChild(stycke);
}

function sorteraStäder() {
    städer.sort((a, b) => a.localeCompare(b, 'sv', { sensitivity: 'base' }));
    document.getElementById("stadLista").value = städer.join(", ");
}