require 'rails_helper'

RSpec.describe Task, type: :model do
  it { should validate_presence_of(:title) }
  it { should validate_uniqueness_of(:title).scoped_to(:project_id).case_insensitive }
  it { should belong_to(:project) }
  it { should belong_to(:user) }
  it { should have_many(:comments).dependent(:destroy) }
end
