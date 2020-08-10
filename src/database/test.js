const Database = require('./db')
const createProffy = require ('./createProffy')

Database.then(async (db) => {
    //Inserção

    proffyValue = {
        name: "Danilo Souza",
        avatar: "https://avatars3.githubusercontent.com/u/9569869?s=460&u=c7b7c678d80791935f2f176fa4dac68c436c0412&v=4",
        whatsapp: "31 99923-2021",
        bio: "Consultar de TI",
       
    }

    classValue = {
        subject: "Ciência da Computação",
        cost: "20",
        
    }

    classScheduleValues = [
        //classe_id virá pelo BD, após cadastro da class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    
    await createProffy(db, {proffyValue, classValue,classScheduleValues})

    //Consulta
})