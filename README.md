# .NET 5 Todo

Small .NET 5 todo app that can be pushed to Cloud Foundry

## Prereqs
* `.NET 5` installed locally
* `Docker` installed locally
* `CF cli` installed locally
* Linux/Mac OS (did not test w/ Windows PCs)
* Your Cloud Foundry instance has `binary_buildpack`

*Note*: make sure that all prereq apps are in the path

## How to start locally
1. Start mariadb: `sh mysql-local.sh` (I know....)
1. Start the app: `sh start-local.sh`

App should start on http://localhost:8080

## How to push to Cloud Foundry
1. Modify manifest.yml if needed
1. Login to your CF org/space
1. `sh publish.sh`
