FactoryBot.define do
  factory :priority do
    name { Faker::Name.unique.name }
  end
end