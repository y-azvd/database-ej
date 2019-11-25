const db = require('../database')

const ProjectController = {
<<<<<<< HEAD
    async index(request, response) {
        const results = await db.query(
        `SELECT 
          "projects"."project_id",
          "projects"."name",

          "client"."name" AS "client",
          
          "projects"."started_at",
          "projects"."delivery_at",
          "projects"."delivered_at",
          "projects"."link_drive",
          "projects"."difficulty",
          "projects"."revenue",
          "projects"."price",
          "projects"."nps"
            
        FROM 
          "projects" "p"
          INNER JOIN
          "clients" "c",
          ON "c"."client_id" = "p"."project_id"
          
        `)
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

*/

    }

    async delete(request, response) {
        const project_id = request.params.id
    
        const result = await db.query(
          `DELETE FROM projects WHERE project_id=${project_id};`
        )
    
        console.log(result)
    
        return response.json({ok: 'deleted'})
      }
    }
    






=======
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
  
  },

  async delete(request, response) {
      const project_id = request.params.id
  
      const result = await db.query(
        `DELETE FROM projects WHERE project_id=${project_id};`
      )
  
      console.log(result)
  
      return response.json({ok: 'deleted'})
    }
}
    
>>>>>>> 3633e4ed9b9a72a68aff81548a6719aa47574061
module.exports = ProjectController

