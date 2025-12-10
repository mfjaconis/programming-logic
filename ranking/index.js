/*
Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

*/

const vitorias = 300;
const derrotas = 800;

function calculateRanking(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;

  if (saldoVitorias < 0) {
    saldoVitorias = 0;
  }

  return saldoVitorias;
}

function printResultRanking(saldoVitorias) {
  let nivel = "";
  if (saldoVitorias <= 10) nivel = "Ferro";
  if (saldoVitorias > 11 && saldoVitorias <= 20) nivel = "Bronze";
  if (saldoVitorias > 20 && saldoVitorias <= 50) nivel = "Prata";
  if (saldoVitorias > 50 && saldoVitorias <= 80) nivel = "Ouro";
  if (saldoVitorias > 80 && saldoVitorias <= 90) nivel = "Platina";
  if (saldoVitorias > 91 && saldoVitorias <= 9000) nivel = "Ascendente";
  if (saldoVitorias > 100) nivel = "Imortal";

  return console.log(
    `\n O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel} \n`
  );
}

printResultRanking(calculateRanking(vitorias, derrotas));
