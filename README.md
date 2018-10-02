# MyTasks
A web application to manage projects and tasks. Ruby on Rails API + React/Redux client.

## Features
* User sign up/login
* Create/edit/delete projects
* Create/edit/delete tasks
* Assign tasks to projects
* Add comments to tasks (and delete them)
* Set status ('active' or 'done'), priority ('low', 'medium' and 'high') and deadline for any task
* Overview: Lists the 5 last recently accessed projects and 5 most inmediate tasks (according to their deadlines)

## Setup
`rails db:setup`

`rails credentials:edit`

`cd client && npm install`


## Run

`rake start`

# API

## Routes
                   Prefix Verb   URI Pattern                           Controller#Action
               user_token POST   /user_token(.:format)                 user_token#create
                 get_user GET    /get_user(.:format)                   v1/user#get_user
               priorities GET    /priorities(.:format)                 v1/tasks#priorities
                 statuses GET    /statuses(.:format)                   v1/tasks#statuses
                   signup POST   /signup(.:format)                     v1/user#signup
            task_comments POST   /tasks/:task_id/comments(.:format)    v1/comments#create
                  comment DELETE /comments/:id(.:format)               v1/comments#destroy
            project_tasks POST   /projects/:project_id/tasks(.:format) v1/tasks#create
                 projects GET    /projects(.:format)                   v1/projects#index
                          POST   /projects(.:format)                   v1/projects#create
                  project GET    /projects/:id(.:format)               v1/projects#show
                          PATCH  /projects/:id(.:format)               v1/projects#update
                          PUT    /projects/:id(.:format)               v1/projects#update
                          DELETE /projects/:id(.:format)               v1/projects#destroy
                    tasks GET    /tasks(.:format)                      v1/tasks#index
                          POST   /tasks(.:format)                      v1/tasks#create
                     task GET    /tasks/:id(.:format)                  v1/tasks#show
                          PATCH  /tasks/:id(.:format)                  v1/tasks#update
                          PUT    /tasks/:id(.:format)                  v1/tasks#update
                          DELETE /tasks/:id(.:format)                  v1/tasks#destroy

## Run specs
`rspec`
