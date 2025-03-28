//FIT e-mail - Vytvořte e-mailovou adresu pro studenty FIT ČVUT.

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
