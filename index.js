import User from './User.js'
import Admin from './Admin.js'
import Docente from './Docente.js'

const novoAdmin = new Admin('ítalo', 'jsndna@gmail.com', '22/22/2222') 
const novoUser = new User('Mariana', 'njdanja@gmail.com', '2000-01-21')
const novoDocente = new Docente('Guilherme', 'g@g.com', '2022-01-01')

novoAdmin.criarCurso()
console.table([novoAdmin.exibirInfos(), novoUser.exibirInfos(), novoDocente.exibirInfos()])