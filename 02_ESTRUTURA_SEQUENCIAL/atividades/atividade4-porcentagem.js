// atividade 04, achei que tinha que pegar os centavos e transformar em porcentagem para dar o desconto... 

let medicamento, valor, valorPromo, total

medicamento = prompt("Qual o nome do medicamento?")

valor = prompt("Qual o valor do medicamento?")
valor = valor * 2

valorPromo = valor - (Math.floor(valor))

valorPromo = valorPromo * 100

total = (valorPromo / 100) * valor

alert(`Medicamento: ${medicamento}\nPromoção de: ${valorPromo}% \nvalor total: ${total}`)

