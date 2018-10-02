module V1

  class CommentsController < ApplicationController
    before_action :set_comment, only: [:update, :destroy]
    before_action :authenticate_user
    
    # # GET /comments
    # def index
    #   @comments = Comment.all
    #   json_response(@comments)
    # end

    # POST /comments
    def create
      @comment = Comment.create!(comment_params)
      json_response(@comment, :created)
    end

    # # PATCH/PUT /comments/1
    # def update
    #   @comment.update(comment_params)
    #   head :no_content
    # end

    # DELETE /comments/1
    def destroy
      @comment.destroy
      head :no_content
    end

    private

      def comment_params
        params.permit(:text, :user_id, :task_id)
      end

      def set_comment
        @comment = Comment.find(params[:id])
      end
  end

end