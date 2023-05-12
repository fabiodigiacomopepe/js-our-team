/*
RICHIESTA
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede 

NOME            RUOLO                   FOTO
------------------------------------------------------------------------------
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager    angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg
*/

// Creo ARRAY contenente 6 oggetti, ognuno con proprio NOME, RUOLO, FOTO
const membriTeam = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "foto": "angela-caroll-chief-editor.jpg"
    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "foto": "walter-gordon-office-manager.jpg"
    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "foto": "angela-lopez-social-media-manager.jpg"
    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "foto": "scott-estrada-developer.jpg"
    },
    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "foto": "barbara-ramos-graphic-designer.jpg"
    }
];

// Setto costante elOutput e la collego all'elemento OUTPUT dell'HTML
const elOutput = document.getElementById("output");

// Creo ciclo
for (let i = 0; i < membriTeam.length; i++) {
    let oggettoN = membriTeam[i];               // Setto che variabile oggettoN dovrà essere l'oggetto dell'array in posizione [i]
    for (let chiave in oggettoN) {              // Creo ciclo per estrapolare le KEY dagli oggetti in array 
        console.log(oggettoN[chiave]);          // Loggo informazioni
    }
    let foto = oggettoN.foto;                                               // Setto foto = valore della KEY FOTO
    const elCard = document.createElement("div");                           // Creo elemento DIV e lo setto come elCard
    elCard.innerHTML = `<img src="img/${foto}" alt="${foto}">`              // Inietto in elCard, stringa IMG con percorso e ALT uguali alla KEY foto dei vari oggetti
    elCard.innerHTML += `<div class="n${i}">${oggettoN.nome}</div>`;        // Inietto in elCard, DIV contenente stringa con valore della KEY NOME
    elCard.innerHTML += `<div class="n${i}">${oggettoN.ruolo}</div>`;       // Inietto in elCard, DIV contenente stringa con valore della KEY RUOLO
    elOutput.append(elCard);                                                // Appendo elCard in elOutput (mostro in HTML)
}