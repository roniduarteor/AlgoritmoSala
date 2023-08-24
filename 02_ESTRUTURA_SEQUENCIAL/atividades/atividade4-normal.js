// atividade 04, esse aqui é o normal (o que o professor corrigiu)

let medicamento, valor, valorPromo, total

medicamento = prompt("Qual o nome do medicamento?")

valor = prompt("Qual o valor do medicamento?")
valor = valor * 2

valorPromo = valor - (Math.floor(valor))

total = valor - valorPromo

alert(`Medicamento: ${medicamento}\nPromoção de: ${valorPromo.toFixed(2)} centavos \nvalor total: ${total}`)

