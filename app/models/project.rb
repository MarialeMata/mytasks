class Project < ApplicationRecord
  belongs_to :user
  has_many :tasks, dependent: :destroy
  validates_presence_of :name, :last_seen_at
  validates_uniqueness_of :name, scope: :user_id, case_sensitive: false

end
