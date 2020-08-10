

module.exports = async function(db, {proffyValue, classValue,classScheduleValues }){
    
    //inserir dadis na table de teachers
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name, 
            avatar,
            whatsapp,
            bio
        ) VALUES (
           "${proffyValue.name}",
           "${proffyValue.avatar}",
           "${proffyValue.whatsapp}",
           "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    //inserir dados na tabela classes

    const insertedClass = await db.run(`
            INSERT INTO classes(
                subject,
                cost, 
                proffy_id
                ) VALUES(
                    "${classValue.subject}",
                    "${classValue.cost}",
                    "${proffy_id}"
                );
            )
    `)

    const class_id = insertedClass.lastID

    //Inserir dadoss na tabela class_schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })
    //Aqui é executado todos os db.runs
   await new Promise.all(insertedAllClassScheduleValues)

   new Promise(() => { throw new Error('exception!'); });
}