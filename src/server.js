const proffys = [
    {
        name: "Danilo Souza", 
        avatar: "https://avatars3.githubusercontent.com/u/9569869?s=400&u=c7b7c678d80791935f2f176fa4dac68c436c0412&v=4",
        whatsapp:"31 99923-2021",
        bio:"Entusiasta das melhores tecnologias de matemática avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Matemática",
        cost:"20",
        weekday: [0],
        time_from:[720],
        time_to:[1220]
    },

    {
        name: "Aline Faria", 
        avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQHkGxKUUY59qQ/profile-displayphoto-shrink_400_400/0?e=1602720000&v=beta&t=Pd0MDi8j-SPbm2bkcRPLTMtbu4ILOgkGs8eBsQKpbU4",
        whatsapp:"31 99923-2021",
        bio:"Entusiasta das melhores tecnologias de matemática avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Matemática",
        cost:"20",
        weekday: [0],
        time_from:[720],
        time_to:[1220]
    }


]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    
]


//--------------Implementação das Funcionalidades--------------

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const fielters = req.query
    return res.render ("study.html", {proffys, fielters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query
    
    const isNoEmpty = Object.keys(data).length > 0
    if(isNoEmpty){
        data.subject = getSubject(data.subject)
        //adicionar dados a lista de proffys
        proffys.push(data)
        return res.redirect("/study")
    }
 
    return res.render ("give-classes.html", {subjects, weekdays})
}


//------------Configuração do Servidor--------------------
//Subir o servidor
const express = require('express')
const server = express()


//Configurar nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure('src/views',{
    express: server,
    noCache: true,

})

//Início e configuração do servidor
server
//Tudo que for .use será uma configuração no servidor
//Configuração de arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))

//-------------Definição das rotas da Aplicação-------------------------
//Ao iniciar a rota com a "/", teremos uma requisição (req) e uma resposta (res)
.get("/", pageLanding) 
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses) 

//Start do servidor
.listen(5500)
