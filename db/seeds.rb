# require 'database_cleaner'

# Comment out to run tests
# DatabaseCleaner.clean_with(:truncation)

statuses = Status.create([{name: 'Active'}, {name: 'Done'}])
priorities = Priority.create([{name: 'Low'}, {name: 'Medium'}, {name: 'High'}])
