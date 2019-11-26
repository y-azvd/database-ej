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
          "projects" AS "p"
          LEFT JOIN "clients" AS "c"
          ON "p"."client_id" = "c"."client_id"
        `  
        )
        return response.json(results.rows)
    },

    async create(request, response) {
        const project = request.body
        var results = await db.query(  
        `
        INSERT INTO "projects"(
          "project_id", "name", "started_at",
          "delivery_at", "delivered_at", 
          "link_drive", "difficulty", "revenue", 
          "price", "nps")

        VALUES (default, $1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING "project_id";
        `,
        [project.name, project.started_at, project.delivery_at,
        project.delivered_at, project.link_drive,
        project.difficulty, project.revenue,
        project.price, project.nps]
        )
        return response.json(project)
    
    },

/*    async update(request, response) {
      let results = await db.query(
        `
        SELECT * FROM projects
        WHERE project_id = '${request.params.id}'
        ` 
      )
      
      if (!results.rows[0]) {
        return response.status(404).json({error: 'Not Found'})
      }

      const project = results.rows[0]
      console.log(project)
    
      results = await db.query(
        `SELECT "name" FROM "projects"
        WHERE "name" = '${request.body.name}'`
      )
      
      if (results.rows[0]) {
        return response.status(400).json({error: 'Nome em uso'})
      }
      
      await db.query(
        `
        UPDATE projects
        SET
          "name" = '${request.body.name}',
          "started_at" = '${request.body.started_at}',
          "delivery_at" = '${request.body.delivery_at}',
          "delivered_at" = '${request.body.delivered_at}',
          "link_drive" = '${request.body.link_drive}',
          "difficulty" = '${request.body.difficulty},
          "revenue" = ${request.body.revenue},
          "price" = ${request.body.price},
          "nps" = '${request.body.nps}'
        
        WHERE
          "project_id" = '${projects.project_id}';        
        `
      )
    },
*/

      async delete(request, response) {
        const project_id = request.params.id
    
        const result = await db.query(
          `
          DELETE FROM "projects" 
          WHERE project_id=${project_id};
          `
        )
    
        console.log(result)
    
        return response.json({ok: 'deleted'})
      }
}
    
    

module.exports = ProjectController

