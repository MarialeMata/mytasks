FactoryBot.define do
  factory :comment do
    text { Faker::Lorem.sentence }
    user
    task
  end
end