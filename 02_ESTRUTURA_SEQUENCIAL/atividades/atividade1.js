// atividade 1
let titulo, duracao, horas, minutos


titulo = prompt("Digite o nome do filme:")
duracao = prompt("Quantos minutos dura o filme?")

horas = duracao / 60
horas = parseInt(horas)
minutos = duracao % 60

document.write(`O filme "${titulo}" tem duração de ${horas}h e ${minutos}mins`)
