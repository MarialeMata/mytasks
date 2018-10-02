class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :created_at, :task_id, :author

  def author
    object.user.first_name + " " + object.user.last_name
  end

end
