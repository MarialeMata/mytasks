class Priority < ApplicationRecord
  has_many :tasks
  validates_presence_of :name
  validates_uniqueness_of :name
end
