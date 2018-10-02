# MyTasks
A web application to manage projects and tasks. Ruby on Rails API + React/Redux client.

## Features
* User sign up/login
* Create/edit/delete projects
* Create/edit/delete tasks
* Assign tasks to projects
* Add comments to tasks
* Set status ('active' or 'done'), priority ('low', 'medium' and 'high') and deadline for any task
* Overview: Lists the 5 last recently accessed projects and 5 most inmediate tasks (according to their deadlines)

## Setup
`rails db:setup`

`cd client && npm install`

## Run
`rake start`
