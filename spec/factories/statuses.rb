FactoryBot.define do
  factory :status do
    name { Faker::Coffee.unique.blend_name }
  end
end