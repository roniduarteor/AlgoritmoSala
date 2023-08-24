//atividade 06

let valor, valorPromo, produto, valorTotal

produto = prompt("Informe o nome do produto:")

valor = prompt("Informe o valor do produto:")

valorPromo = valor * (50/100)
valorTotal = (valor * 2) + valorPromo
alert(`Informações sobre o produto [${produto}]\n\nValor de [1] item na promoção: ${valorPromo}\nValor total [3 itens]: ${valorTotal}`) 