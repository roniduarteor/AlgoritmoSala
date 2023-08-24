// 1º Declarar todas as variáveis
let nome, anoNascimento, anoAtual, idade

// 2º variáveis que irão recber valor
nome = prompt("Digite o seu nome: ")
anoNascimento = prompt("Digite o sua data de nascimento: ")
anoAtual = prompt("Digite o ano atual: ")

// 3º Casting nas variáveis que possuem valor numérico
anoNascimento = parseInt(anoNascimento)
anoAtual = Number(anoAtual)

// 4º Processar ou calcular as variáveis que possuem valor
idade = anoAtual - anoNascimento

// 5º Mostrar o resultado
document.write(`Olá ${nome}, sua idade é ${idade} anos`)