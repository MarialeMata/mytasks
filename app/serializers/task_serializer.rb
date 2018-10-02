class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :deadline, :project_id, :priority_id, :status_id, :user_id, :comment_count, :project_name, :status, :priority
  has_many :comments, :serializer => CommentSerializer

  def comment_count
    object.comments.count
  end

  def project_name
    object.project.name
  end

  def status
    object.status.name
  end

  def priority
    object.priority.name
  end

  def comments
    object.comments.order(created_at: :asc)
  end
  
end
