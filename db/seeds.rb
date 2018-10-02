# require 'database_cleaner'

# Comment out to run tests
# DatabaseCleaner.clean_with(:truncation)

# user = User.create( 
#   first_name: 'Maria', 
#   last_name: 'Mata', 
#   email: 'nina8708@gmail.com', 
#   password: '888888',
#   password_confirmation: '888888')

statuses = Status.create([{name: 'Active'}, {name: 'Done'}])
priorities = Priority.create([{name: 'Low'}, {name: 'Medium'}, {name: 'High'}])

# 10.times do |n|
#   project = Project.new
#   project.name = "Project #{n}"
#   project.last_seen_at = DateTime.now - (rand * 7)
#   project.user_id = user.id
#   project.save

#   10.times do |m|
#     task = Task.new
#     task.title = "Task #{m}"
#     task.deadline = DateTime.now + (rand * 21)
#     task.project_id = project.id
#     task.priority_id = priorities[0].id
#     task.status_id = statuses[0].id
#     task.user_id = user.id
#     task.save!

#     3.times do |m|
#       Comment.create(text: "A comment.", user_id: user.id, task_id: task.id)
#     end

#   end

# end