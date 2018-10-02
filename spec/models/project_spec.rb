require 'rails_helper'

RSpec.describe Project, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:last_seen_at) }
  it { should validate_uniqueness_of(:name).scoped_to(:user_id).case_insensitive }
  it { should belong_to(:user) }
  it { should have_many(:tasks).dependent(:destroy) }
end
