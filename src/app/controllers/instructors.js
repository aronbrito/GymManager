const { Z_FILTERED } = require('zlib')
const Instructor = require('../models/Instructor')
const { age, date  } = require('../../lib/utils')



module.exports = {
    index (req, res) {
        Instructor.all(function(instructors) {
            return res.render('instructors/index', {instructors})
        })
    },

    create (req, res) {
        return res.render('instructors/create')
    },

    post (req, res) {
        const keys = Object.keys(req.body)

        for (key of keys){
            if(req.body[key] == "")
                return res.send('Preencha todos os campos')
        }

        Instructor.create(req.body, function(instructor) {
            return res.redirect(`/instructors/${instructor.id}`) 
        })
        
    },

    show (req, res) {
        Instructor.find(req.params.id, function (instructor){
            if(!instructor) return res.send("Instrutor nao encontrado")

            instructor.age = age(instructor.birth)
            instructor.services = instructor.services.split(",")
            instructor.created_at = date(instructor.created_at).format

            return res.render("instructor/show", {instructor})
        })
    },

    edit (req, res) {
        return
    },

    put (req, res) {
        const keys = Object.keys(req.body)

        for (key of keys){
            if(req.body[key] == "")
                return res.send('Preencha todos os campos')
        }

         let {avatar_url, name, birth, gender, services} = req.body

         return
    },

    delete (req, res) {
        return
    },
}
