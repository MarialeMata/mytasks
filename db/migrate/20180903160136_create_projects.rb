class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.timestamp :last_seen_at
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
