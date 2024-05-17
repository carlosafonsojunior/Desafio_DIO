/*echo "# Desafio_DIO" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:carlosafonsojunior/Desafio_DIO.git
git push -u origin main*/

// Variáveis
const nomeHeroi = "Carlos"; // Nome do herói
let xpHeroi = 2001; // XP do herói

// Estrutura de decisão para determinar o nível
let nivel;

if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi <= 8000) {
    nivel = "Platina";
} else if (xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Saída 
console.log('O Herói de nome' + nomeHeroi + 'está no nível de' + nivel );
//console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);

