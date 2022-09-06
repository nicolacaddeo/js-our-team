/*
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

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
for (let index = 0; index < ourTeam.length; index++) {
    console.log('Membro del team numero', index + 1);
    console.log('Nome:', ourTeam[index].nome);
    console.log('Ruolo:', ourTeam[index].ruolo);
    console.log('Foto:', ourTeam[index].foto);
    console.log('-----------------');
}


