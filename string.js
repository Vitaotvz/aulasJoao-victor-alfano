const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))

// para colocar string pode usar "" '' ou ``

console.log(escola.charCodeAt(3)) // retorna valor da tabela UNICODE
console.log(escola.indexOf('3')) // índice associado a variavel escola

console.log(escola.substring(1)) // inclui índice 1 até o final
console.log(escola.substring(0,3)) // índice 0 a 2
console.log('Escola ' .concat(escola).concat("!")) //Escola é um valor do tipo literal, ou seja posso passar direto sem variavel
//poderia usar console.log('Escola' + escola + "!")
// + no contexto numérico vai somar mas no string vai concatenar
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) // regex pra substituir todos os digitos numericos dentro do texto por e

console.log('Ana,Maria,Pedro'.split(',')) // Conversão para array. Pode ser usado regex /,/
