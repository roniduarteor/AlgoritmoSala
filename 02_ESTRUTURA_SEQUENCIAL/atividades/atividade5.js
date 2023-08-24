// atividade 05

let valorMin, tempoUso, sessoesDe15Mins, valorTotal

valorMin = prompt("Informe o valor por minuto")

tempoUso = prompt("Informe o tempo de uso do cliente:")

sessoesDe15Mins = Math.ceil(tempoUso / 15) // são tipo sessoes de 15 minutos, ent se ele ficou 30 mins, são 2 sessões de 15

valorTotal = valorMin* sessoesDe15Mins

alert(`Valor total a ser pago pelo cliente:\n[${valorTotal}]`)