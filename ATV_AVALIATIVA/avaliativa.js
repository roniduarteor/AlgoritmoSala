// avaliação

let atvSala, atvCasa, sitAprendrizagem, avaliaçãoObj, mediaArquitetura, mediaMetodologias, mediaLogica, mediaFundamentos, mediaSemestral


 // inserir notas em Arq de Hard e Soft
atvSala = Number(prompt("Nota em [Arquitetura de Hardware e Software]\n\n  Digite a quantidade de pontos adquiridos em [Atividades em sala]:"))

atvCasa = Number(prompt("Nota em [Arquitetura de Hardware e Software]\n\n  Digite a quantidade de pontos adquiridos em [Atividades em casa]:"))

sitAprendrizagem = Number(prompt("Nota em [Arquitetura de Hardware e Software]\n\n  Digite a quantidade de pontos adquiridos em [Situação aprendizagem]:"))

avaliaçãoObj = Number(prompt("Nota em [Arquitetura de Hardware e Software]\n\n  Digite a quantidade de pontos adquiridos em [Avaliação objetivas]:"))


mediaArquitetura = (atvSala + atvCasa + sitAprendrizagem + avaliaçãoObj) / 4


// inserir notas em Metodologias e desenvolvimento
atvSala = Number(prompt("Nota em [Metodologias de Desenvolvimento de Projetos]\n\n  Digite a quantidade de pontos adquiridos em [Atividades em sala]:"))

atvCasa = Number(prompt("Nota em [Metodologias de Desenvolvimento de Projetos]\n\n  Digite a quantidade de pontos adquiridos em [Atividades em casa]:"))

sitAprendrizagem = Number(prompt("Nota em [Metodologias de Desenvolvimento de Projetos]\n\n  Digite a quantidade de pontos adquiridos em [Situação aprendizagem]:"))

avaliaçãoObj = Number(prompt("Nota em [Metodologias de Desenvolvimento de Projetos]\n\n  Digite a quantidade de pontos adquiridos em [Avaliação objetivas]:"))


mediaMetodologias = (atvSala + atvCasa + sitAprendrizagem + avaliaçãoObj) / 4

// inserir notas em Lógica computacional
atvSala = Number(prompt("Nota em [Lógica Computacional]\n\n  Digite a quantidade de pontos adquiridos em [Atividades em sala]:"))

atvCasa = Number(prompt("Nota em [Lógica Computacional]\n\n  Digite a quantidade de pontos adquiridos em [Atividades em casa]:"))

sitAprendrizagem = Number(prompt("Nota em [Lógica Computacional]\n\n  Digite a quantidade de pontos adquiridos em [Situação aprendizagem]:"))

avaliaçãoObj = Number(prompt("Nota em [Lógica Computacional]\n\n  Digite a quantidade de pontos adquiridos em [Avaliação objetivas]:"))

mediaLogica = (atvSala + atvCasa + sitAprendrizagem + avaliaçãoObj) / 4


// inserir notas em Fundamentos de banco de dados
atvSala = Number(prompt("Nota em [Fundamentos de banco de dados]\n\n  Digite a quantidade de pontos adquiridos em [Atividades em sala]:"))

atvCasa = Number(prompt("Nota em [Fundamentos de banco de dados]\n\n  Digite a quantidade de pontos adquiridos em [Atividades em casa]:"))

sitAprendrizagem = Number(prompt("Nota em [Fundamentos de banco de dados]\n\n  Digite a quantidade de pontos adquiridos em [Situação aprendizagem]:"))

avaliaçãoObj = Number(prompt("Nota em [Fundamentos de banco de dados]\n\n  Digite a quantidade de pontos adquiridos em [Avaliação objetivas]:"))

mediaFundamentos = (atvSala + atvCasa + sitAprendrizagem + avaliaçãoObj) / 4



// inserir a media semestral
mediaSemestral = (mediaArquitetura + mediaFundamentos + mediaLogica + mediaMetodologias) / 4

alert(`Média em [Arquitetura de Hard e Software]: ${mediaArquitetura.toFixed(2)}\nMédia em [Metodologias de Desenvolvimento de Projetos] ${mediaMetodologias.toFixed(2)}\nMédia em [Lógica Computacional]: ${mediaLogica.toFixed(2)}\nMédia em [Fundamentos de banco de dados]: ${mediaFundamentos.toFixed(2)}\n\n  Média semestral: ${mediaSemestral.toFixed(2)}`)