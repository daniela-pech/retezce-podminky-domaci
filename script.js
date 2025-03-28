//FIT e-mail - Vytvořte e-mailovou adresu pro studenty FIT ČVUT.
/*
const jmeno = {
  krestni: prompt('Zadej křesní jméno'),
  prijmeni: prompt('Zadej prijmeni'),
};

const finalKrestni = jmeno.krestni.trim().slice(0, 3).toLocaleLowerCase();
const finalPrijmeni = jmeno.prijmeni.trim().slice(0, 5).toLocaleLowerCase();
const domena = 'fit.cvut.cz';
document.body.innerHTML += `
<p>
${finalPrijmeni}${finalKrestni}@${domena}
</p>
`;
*/
// Množstevní slevy - Napište program, který spočítá cenu objednávky triček s potiskem.

const pocetKusu = prompt('Zadej počet kusů objednávky.');
let cenaKus = '';
if (pocetKusu < 50) {
  cenaKus = 300;
} else if (pocetKusu < 200) {
  cenaKus = 250;
} else if (pocetKusu < 500) {
  cenaKus = 200;
} else if (pocetKusu < 1000) {
  cenaKus = 150;
} else {
  cenaKus = 120;
}
const cenaCelkem = cenaKus * pocetKusu;
document.body.innerHTML += `
<p>Odběr kusů: ${pocetKusu}</p>
<p>Cena za kus: ${cenaKus} Kč</p>
<h2>Celková cena: ${cenaCelkem} Kč</h2>
`;
