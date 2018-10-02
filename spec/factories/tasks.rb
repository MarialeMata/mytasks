FactoryBot.define do
  factory :task do
    title { Faker::Lorem.unique.sentence }
    description { Faker::Lorem.unique.sentence }
    deadline { Time.now.in_time_zone.as_json }
    project
    priority
    status
    user

    factory :task_with_comments do
      transient do
        comments_count { 2 }
      end

      after(:create) do |task, evaluator|
        create_list(:comment, evaluator.comments_count, task: task)
      end
    end
  end
end