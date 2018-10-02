class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :last_seen_at, :user_id, :task_count, :created_at

  def task_count
    object.tasks.count
  end

end
