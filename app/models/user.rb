class User < ApplicationRecord
  has_many :projects, dependent: :destroy
  has_many :tasks, dependent: :destroy
  has_many :comments, dependent: :destroy
  validates_presence_of :first_name, :last_name, :email, :password_digest
  validates_uniqueness_of :email, case_sensitive: false
  has_secure_password

end
