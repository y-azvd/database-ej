const db = require('../database')

const ProjectController = {
    async index(request, response) {
        const results = await db.query(
        `SELECT * from projects`)
        return response.json(results.rows)
    },

    async create(request, response) {
        const project = request.body
        await db.query(  
        `
        INSERT INTO "projects"("project_id", "name", "started_at", "link_drive", "difficulty", "revenue", "price")
        VALUES (default, $1, $2, $3, $4, $5, $6)
        RETURNING "project_id";`,
        [project.name, project.started_at, project.link_drive, project.difficulty, project.revenue, project.price]
        )
        return response.json(request.body)
    
    }

    




}

module.exports = ProjectController

