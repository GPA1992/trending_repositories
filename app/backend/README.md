# NODEJS - ORM - EXPRESS BOILERPLATE


> ##  SEQUELIZE SHEETSHET

 ## Migration

 #### Cria a migration
- npx sequelize migration:generate --name >NOME DA MIGRATION<

#### Executa pro Servidor

- npx sequelize db:migrate

#### Reverte a migration

- npx sequelize db:migrate:undo


## SEED

#### Cria a Seed
- npx sequelize seed:generate --name >NOME DA SEED<

#### Executa todas as Seeds
- npx sequelize db:seed:all