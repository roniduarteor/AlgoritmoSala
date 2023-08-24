// atividade 03

let precoKG, consumoG, pagar

precoKG = prompt("Qual o valor por [KG]?")

consumoG = prompt("Quanto o cliente consumiu em [GRAMAS]:")

pagar = (consumoG * precoKG) / 1000

alert(`Consumo em G: ${consumoG} \nValor a ser pago: R$${pagar}`)