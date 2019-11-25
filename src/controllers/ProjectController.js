const db = require('../database')

const ProjectController = {
    async index(request, response) {
        const results = await db.query(
        `SELECT 
          "p"."project_id",
          "p"."name",

          "c"."name" AS "client",
          
          "p"."started_at",
          "p"."delivery_at",
          "p"."delivered_at",
          "p"."link_drive",
          "p"."difficulty",
          "p"."revenue",
          "p"."price",
          "p"."nps"
            
        FROM 
          "projects" "p"
          INNER JOIN
          "clients" "c"
          ON "c"."client_id" = "p"."project_id"
        `  
        )
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
    
    },

/*    async update(request, response) {
      let results = await db.query(
        `SELECT * FROM projects
        WHERE project_id = '${request.params.id}'
        ` 
      )
      
      if (!results.rows[0]) {
        return response.status(404).json({error: 'Not Found'})
      }

      cons project = results.rows[0]
      console.log(project)
    }
*/

    

    async delete(request, response) {
        const project_id = request.params.id
    
        const result = await db.query(
          `DELETE FROM projects WHERE project_id=${project_id};`
        )
    
        console.log(result)
    
        return response.json({ok: 'deleted'})
      }
    }
    






module.exports = ProjectController

