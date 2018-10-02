class Task < ApplicationRecord
  belongs_to :project
  belongs_to :priority
  belongs_to :status
  belongs_to :user
  has_many :comments, dependent: :destroy
  validates_presence_of :title
  validates_uniqueness_of :title, scope: :project_id, case_sensitive: false
end
