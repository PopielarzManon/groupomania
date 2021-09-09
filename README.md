Installation
|
v
Utiliser le jeu de données fourni avec utilisateurs :
            
Admin : admin
        admin@admin.fr
        adminadmin


OU


Sur le dossier Groupomania avec un terminal:
-> npm install
-> npm run serve

Sur le dossier backend avec un autre terminal:
-> npm install
-> Vous devez créer un dossier images dans le dossier backend
-> nodemon server

MySQL logo Utiliser un serveur de Base de Données type MAMP/XAMPP + Workbench pour visualiser et lier les modèles de tables

Créer les 3 bases de données nécessaires :
-> groupomania_test / goupomania_developement / groupomania_production

Utiliser Sequelize pour créer les tables directement via Node.JS:
-> sequelize db:create
-> sequelize db:migrate



.env  
|
v


DB_TOKEN='VTudcjhvTYDtcyudckky654567Uguvjb'
DB_COOKIE='GHctghk6789ugvk'
DB_USER='root'
DB_PASS=''
DB_HOST='localhost'