
const color = require('colors')
const readlinesync = require('readline-sync')
var Numero1
var Numero2
var resultado

console.log('Que desea realizar?')
console.log('1-Suma \n 2-Resta \n 3-Multiplicacion \n 4-Division')

var opcion = readlinesync.questionInt('Opcion: ')

switch (opcion) {
  case 1:
    console.log('Ingrese dos numeros a sumar: \n')
    console.log(`${color.green('Numero 1: ')}`)
    Numero1 = readlinesync.question('')
    console.log(`${color.blue('Numero 2: ')}`)
    Numero2 = readlinesync.question('')

    resultado = parseInt(Numero1) + parseInt(Numero2)
    console.log(`La ${color.yellow('suma')} de ${Numero1.green} + ${Numero2.blue} es: ${color.yellow(resultado)}`)
    break

  case 2:
    console.log('Ingrese dos numeros a restar: \n')
    console.log(`${color.green('Numero 1: ')}`)
    Numero1 = readlinesync.question('')
    console.log(`${color.blue('Numero 2: ')}`)
    Numero2 = readlinesync.question('')

    resultado = parseInt(Numero1) - parseInt(Numero2)
    console.log(`La ${color.yellow('resta')} de ${Numero1.green} + ${Numero2.blue} es: ${color.yellow(resultado)}`)
    break

  case 3:
    console.log('Ingrese dos numeros a multiplicar: \n')
    console.log(`${color.green('Numero 1: ')}`)
    Numero1 = readlinesync.question('')
    console.log(`${color.blue('Numero 2: ')}`)
    Numero2 = readlinesync.question('')

    resultado = parseInt(Numero1) * parseInt(Numero2)
    console.log(`La ${color.yellow('multiplicacion')} de ${Numero1.green} + ${Numero2.blue} es: ${color.yellow(resultado)}`)
    break

  case 4:
    console.log('Ingrese dos numeros a dividir: \n')
    console.log(`${color.green('Numero 1: ')}`)
    Numero1 = readlinesync.question('')
    console.log(`${color.blue('Numero 2: ')}`)
    Numero2 = readlinesync.question('')

    resultado = parseInt(Numero1) / parseInt(Numero2)
    console.log(`La ${color.yellow('division')} de ${Numero1.green} + ${Numero2.blue} es: ${color.yellow(resultado)}`)

    break
}
