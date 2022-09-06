/*
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/
const cardsContainer = document.getElementById('cards-container');



// oggetti - team
const memberWayne = {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg'
};
const memberAngela = {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg'
};
const memberWalter = {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg'
};
const memberAngelaLopez = {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg'
};
const memberScott = {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg'
};
const memberBarbara = {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg'
};

const ourTeam = [memberWayne, memberAngela, memberWalter, memberAngelaLopez, memberScott, memberBarbara];

// loop per stampare le info in console
for (let i = 0; i < ourTeam.length; i++) {
    console.log('Membro del team numero', i + 1);
    console.log('Nome:', ourTeam[i].nome);
    console.log('Ruolo:', ourTeam[i].ruolo);
    console.log('Foto:', ourTeam[i].foto);
    console.log('-----------------');
}

for (index = 0; index < ourTeam.length; index++) {
    const memberContainer = document.createElement('div');
    memberContainer.className = 'col-12';
    memberContainer.classList.add('nc-container');
    cardsContainer.append(memberContainer);
    appendName();
    appendRole();

    // funzione per stampare NOME
    function appendName() {
        const infoContainer = document.createElement('p');
        infoContainer.append('Nome:' + ' ' + ourTeam[index].nome);
        memberContainer.append(infoContainer);

    }

    // funzione per stampare RUOLO
    function appendRole() {
        const infoContainer = document.createElement('p');
        infoContainer.append('Ruolo:' + ' ' + ourTeam[index].ruolo);
        memberContainer.append(infoContainer);
    }
}




