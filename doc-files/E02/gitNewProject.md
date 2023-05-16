


Pour créer un nouveau dépôt en partant d'un code local non connecté à github, voici la marche à suivre 



* on crée notre dossier localement, on se déplace à l'intérieur * 
* on crée notre dépôt en ligne sur github par ex 
`git init` - permet de spécifier que notre dépôt local est un dépôt git (à partir de là, on peut faire des add et commit)

`git remote add origin git@adresseGit` - crée la connexion entre le dépôt distant et local

* le lien est établi, on peut vérifier que la connexion soit faite ou reprendre notre routine *

`git remote -v` - permet d'afficher le nom et l'adresse du dépôt distant

`git add .`
`git commit -m "commentaire"`
`git push` (i) on peut vous demander d'établir le lien entre la branche locale et distante, pour se faire, une commande vous sera indiquée, vous aurez juste à la copier avant de reprendre votre workflow habituel



## Lexique


dépôt distant : github
dépôt local : notre machine