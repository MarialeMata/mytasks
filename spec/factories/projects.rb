FactoryBot.define do
  factory :project do
    name { Faker::Lorem.unique.word }
    description { Faker::Lorem.unique.sentence }
    last_seen_at { Time.now.in_time_zone.as_json }
    user

    factory :project_with_tasks do
      transient do
        tasks_count { 10 }
      end

      after(:create) do |project, evaluator|
        create_list(:task, evaluator.tasks_count, project: project)
      end
    end
  end
end