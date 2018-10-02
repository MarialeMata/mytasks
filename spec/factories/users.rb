FactoryBot.define do
  factory :user do
    email { Faker::Internet.unique.email }
    first_name { Faker::Name.unique.first_name }
    last_name { Faker::Name.unique.last_name }
    password_digest { Faker::Crypto.unique.md5 }

    factory :user_with_projects do
      transient do
        projects_count { 5 }
      end

      after(:create) do |user, evaluator|
        create_list(:project, evaluator.projects_count, user: user)
      end
    end

    factory :user_with_tasks do
      transient do
        tasks_count { 5 }
      end

      after(:create) do |user, evaluator|
        create_list(:task, evaluator.tasks_count, user: user)
      end
    end

    factory :user_with_comments do
      transient do
        comments_count { 2 }
      end

      after(:create) do |user, evaluator|
        create_list(:comment, evaluator.comments_count, user: user)
      end
    end
  end
end