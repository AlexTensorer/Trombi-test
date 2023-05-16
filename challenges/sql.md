
1 - se connecter à postgresql



- toutes les promos, dans l'ordre alphabétique

`SELECT * FROM promo   ORDER BY name  ASC;`
// par défaut, les résultats seront triés dans un ordre ascendant, de ce fait, on est pas obligés de rajouter le 'ASC'

- tous les étudiants, dans l'ordre alphabétique des noms de famille

`SELECT * FROM student ORDER BY last_name;`

- tous les étudiants de la promo 135

`SELECT * FROM student WHERE promo_id = 135;`

- les étudiants dont le nom ou le prénom ressemble à "max"

`SELECT * FROM student WHERE first_name LIKE '%Max%';`

- Insérer dans la table "student" un étudiant qui s'appelle "Chuck Norris" appartenant à la promo 5

`INSERT INTO student(first_name, last_name, promo_id, profile_picture_url) VALUES('Chuck', 'Norris', 5, 'https://img.filmsactu.net/datas/personnes/c/h/chuck-norris/n/chuck-norris-61703b88aeb9f.jpg');`

- Insérer dans la table "promo" une promo qui s'appelle "César" et ne possède pas d'orga

`INSERT INTO "promo" ("id", "name") VALUES(2, 'César');`

- Mettre à jour la promo 5 pour la renommer "Cleo"

`UPDATE "promo" SET "name" = 'Cléo' WHERE id = 5;`

- Supprimer la promo 123

`DELETE FROM "student" WHERE "promo_id" = 123;`
`DELETE FROM "promo" WHERE "id" = 123;`
