const db = require('../database')

const ProjectReporter = {
  async getLate(request, response) {
    const results = await db.query(
      `SELECT 
        "project_id", "name"
      FROM
        "projects"
      WHERE
        "delivery_at" < "delivered_at"
          OR 
        "delivery_at" > current_date;`
    )
  
    return response.json(results.rows)
  },

  async getExpensive(request, response) {
    const results = await db.query(
      `SELECT 
        "project_id", 
        "name",
        "revenue",
        "price",
        "revenue" - "price" AS "loss"
      FROM
        "projects"
      WHERE
        "revenue" < "price";`
    )
  
    return response.json(results.rows)
  },

  async getMembers(request, response) {
    const results = await db.query(
      `SELECT 
        "members"."name",
        "members"."cpf"
      FROM 
        "projects" INNER JOIN "consultant_works_project" 
      ON 
        "projects"."project_id" = "consultant_works_project"."project_id"
          INNER JOIN 
        "members" 
      ON 
        "consultant_works_project"."cpf" = "members"."cpf"
      WHERE
        "projects"."project_id" = ${request.params.id};`
    )
  
    return response.json(results.rows)
  
  }
}

module.exports = ProjectReporter
