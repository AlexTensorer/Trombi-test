




# QQVVA ? 

## SQL
## SGBD
## PostgreSQL
## MCD - MLD (illustration du rapport entre les tables)



## se connecter à la BDD d'oclock


1 - être sur le VPN

2 - Pour se connecter à une BDD : 

`psql -h adresseDeLaBDD -U nomUtilisateur -d NomdelaBDD` 

et dans notre cas : 

`psql -h pg.oclock.lan -U etudiant -d trombi`

à partir de là, on vous demande un mot de passe : `js4life`
(i) lorsque vous tapez ce mot de passe, les caractères ne s'affichent pas, il faut donc écrire à l'aveugle


## essayer des commandes dans psql

\dt; - afficher les tables 
\d nomTable - affiche le détail d'une talbe
\q - quitter psql
quitter les résultats d'une requête - `q`

## essayer des requêtes



Les requêtes sont toujours composées de la même manière

`SELECT laOuLesChamps FROM nomTable WHERE condition;`


- sélectionner tous les champs d'une table : 
`SELECT * FROM nomDeTable;`

- ajouter une condition à notre requête 
`SELECT * FROM nomDeTable WHERE condition`
(i) plusieurs opérateurs sont disponibles, vous pouvez retrouver la liste sur la doc 
[https://www.tutorialspoint.com/sql/sql-operators.htm](https://www.tutorialspoint.com/sql/sql-operators.htm)



## lier postgresql à notre projet

1 - installer postgresql

`npm i pg`

2 - configurer postgresql

On rajoute un fichier database.js dans le dossier app et on le remplit : 

```


// on récupère le client du module postgres
const { Client } = require('pg');


// on définit la connexion à la BDD
// l'adresse est consituée de cettez manière : 
// postgresql://nomUtilisateur:motDePasse@adresseBDD/nomDeLaBDD
const pgClient = new Client('postgresql://etudiant:js4life@pg.oclock.lan/trombi')

// on lance la connexion à la BDD
pgClient.connect();


// on exporte le client
module.exports = pgClient;
```

3 - utiliser


