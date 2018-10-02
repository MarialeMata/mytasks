module V1

  class TasksController < ApplicationController
    before_action :set_task, only: [:show, :update, :destroy]
    before_action :authenticate_user
    
    # GET /tasks
    def index
      @tasks = current_user.tasks
      json_response(@tasks)
    end

    # GET /tasks/1
    def show
      json_response(@task)
    end

    # POST /tasks
    def create
      @task = Task.create!(task_params)
      json_response(@task, :created)
    end

    # PATCH/PUT /tasks/1
    def update
      @task.update!(task_params)
      head :no_content
    end

    # DELETE /tasks/1
    def destroy
      @task.destroy
      head :no_content
    end

    def priorities
      @priorities = Priority.all
      json_response(@priorities)
    end

    def statuses
      @statuses = Status.all
      json_response(@statuses)
    end

    private

      def task_params
        params.permit(:title, :description, :deadline, :project_id, :priority_id, :status_id, :user_id)
      end

      def set_task
        @task = Task.find(params[:id])
      end
  end

end