-- Esse arquivo adiciona restrições a algumas chaves estrangeiras de algumas tabelas

ALTER TABLE "members"
  ADD CONSTRAINT members_status_id_fkey FOREIGN KEY("status_id") REFERENCES "status"("status_id");


ALTER TABLE "projects"
  ADD CONSTRAINT projects_client_id_fkey FOREIGN KEY("client_id") REFERENCES "clients"("client_id") ON DELETE SET NULL,
  ADD CONSTRAINT projects_manager_cpf_fkey FOREIGN KEY("manager_cpf") REFERENCES "managers"("cpf");


ALTER TABLE "member_role_semester"
  ADD CONSTRAINT mrs_cpf_fkey     FOREIGN KEY("cpf")     REFERENCES "members"("cpf"),
  ADD CONSTRAINT mrs_role_id_fkey FOREIGN KEY("role_id") REFERENCES "roles"("role_id");


ALTER TABLE "consultant_works_project"
  ADD CONSTRAINT cwp_cpf_fkey        FOREIGN KEY ("cpf")        REFERENCES "members"("cpf"),
  ADD CONSTRAINT cwp_project_id_fkey FOREIGN KEY ("project_id") REFERENCES "projects"("project_id");


ALTER TABLE "client_phones"
  ADD CONSTRAINT client_phones_client_id_fkey FOREIGN KEY ("client_id") REFERENCES "clients"("client_id")
    ON DELETE CASCADE;


ALTER TABLE "parcels"
  ADD CONSTRAINT parcels_project_id_fkey FOREIGN KEY ("project_id") REFERENCES "projects"("project_id");


ALTER TABLE "extra_costs"
  ADD CONSTRAINT extra_costs_project_id_fkey FOREIGN KEY ("project_id") REFERENCES "projects"("project_id");


--Agora vem três tabelas iguais
ALTER TABLE "consultants"
  ADD CONSTRAINT consultants_cpf_fkey             FOREIGN KEY ("cpf")             REFERENCES "members"("cpf"),
  ADD CONSTRAINT consultants_directorship_id_fkey FOREIGN KEY ("directorship_id") REFERENCES "directorships"("directorship_id");


ALTER TABLE "managers"
  ADD CONSTRAINT managers_cpf_fkey             FOREIGN KEY ("cpf")             REFERENCES "members"("cpf"),
  ADD CONSTRAINT managers_directorship_id_fkey FOREIGN KEY ("directorship_id") REFERENCES "directorships"("directorship_id")
    ON DELETE CASCADE;


ALTER TABLE "directors"
  ADD CONSTRAINT directors_cpf_fkey             FOREIGN KEY ("cpf")             REFERENCES "members"("cpf"),
  ADD CONSTRAINT directors_directorship_id_fkey FOREIGN KEY ("directorship_id") REFERENCES "directorships"("directorship_id");
