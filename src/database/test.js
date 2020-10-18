const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Instituto Acolhedor Maria Soares ",
        about: "Presta assistência a crianças de 06 a 15 //anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "987548364",
        images: [
            "https://www.jota.info/wp-content/uploads/2016/09/4931221922_4ec810919c_o.jpg",

            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ5_WWaTtUVSre6fFC6j_PWc05tw02RT4Cmg&usqp=CAU"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas das 8h até 18h",
        open_on_weekends: "1"
    })

    //consultar dados da tabela
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    //console.log(selectedOrphanages)

    // consultar somente 1 orphanato, pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    //console.log(orphanage)

    // deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})