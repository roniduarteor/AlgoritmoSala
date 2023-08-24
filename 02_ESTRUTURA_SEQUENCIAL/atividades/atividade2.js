// atividade 02
let modelo, preco, entrada, saldo

modelo = prompt("Qual o modelo do carro?")
preco = prompt("Qual o valor do veículo?")

entrada = preco / 2
saldo = entrada / 12

document.write(`O valor de entrada é de ${entrada}R$ e o valor das parcelas de 12x é de: ${saldo.toFixed(2)}`)