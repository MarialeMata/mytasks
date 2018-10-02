class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description
      t.datetime :deadline
      t.references :project, foreign_key: true
      t.references :priority, foreign_key: true
      t.references :status, foreign_key: true

      t.timestamps
    end
  end
end
