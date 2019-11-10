DELETE FROM "projects";

INSERT INTO "projects"("project_id", "name", "started_at", "delivery_at", "delivered_at", "link_drive", "difficulty", "revenue", "price", "client_id")
VALUES
  (
    1,
    'Tá Soda', 
    '2019-07-06', 
    null, 
    null, 
    'https://en.wikipedia.org/wiki/Database', 
    3, 1500, 1600, 1
  ),
  (
    2,
    'Team Builder', 
    '2018-06-06', 
    null, 
    null,
    'https://en.wikipedia.org/wiki/Database', 
    2, 0, 0, 2
  ),
  (
    3,
    'TechPet', 
    '2018-06-06', 
    null, 
    null,
    'https://en.wikipedia.org/wiki/Database', 
    2, 1500, 1500, 3
  ),
  (
    4,
    'Dionísio', 
    '2019-09-20', 
    null, 
    null,
    'https://en.wikipedia.org/wiki/Database', 
    5, 180000, 180000, 7
  ),
  (
    6,
    'Bambu Quântico', 
    '2017-01-20', 
    null, 
    null, 
    'https://en.wikipedia.org/wiki/Database', 
    3, 10, 10, 9
  ),
  (
    7,
    'Dona Florina', 
    '2019-04-20', 
    null, 
    null, 
    'https://en.wikipedia.org/wiki/Database', 
    3, 3500, 3500, 8
  ),
  (
    8,
    'Silo', 
    '2019-07-20', 
    null, 
    null, 
    'https://en.wikipedia.org/wiki/Database', 
    4, 7500, 7500, 7
  ),
  (

    9,
    'Telemetria', 
    '2019-03-10', 
    '2019-05-28', 
    '2019-05-28', 
    'https://en.wikipedia.org/wiki/Database', 
    2, 0, 0, 11
  ),
  (
    5,
    'Fada do Dente', 
    '2019-03-01', 
    '2019-06-01', 
    '2019-05-28', 
    'https://en.wikipedia.org/wiki/Database', 
    3, 40000, 40000, 6
  ),
  (
    10,
    'RiHappy', 
    '2019-01-10', 
    '2019-02-05', 
    '2019-02-05', 
    'https://en.wikipedia.org/wiki/Database', 
    2, 30000, 30000, 10
  ),
  (
    11,
    'BitContainer', 
    '2017-01-10', 
    '2018-02-05', 
    '2019-02-05', 
    'https://en.wikipedia.org/wiki/Database', 
    4, 30000, 30000, 5
  ),
  (
    12,
    'Cortina', 
    '2017-01-10', 
    '2018-02-05', 
    '2019-02-05', 
    'https://en.wikipedia.org/wiki/Database', 
    3, 100000, 100000, 3
  )
;
