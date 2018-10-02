module V1

  class UserController < ApplicationController
    before_action :authenticate_user,  only: [:get_user]

    def signup
      @user = User.create!(user_params)
      json_response(@user, :created)
    end

    def get_user
      user_info = { 
        id: current_user.id, 
        first_name: current_user.first_name, 
        last_name: current_user.last_name, 
        email: current_user.email 
      }
      json_response(user_info)
    end

    private

      def user_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
      end

      def user
        @user = User.find(params[:id])
      end

  end

end
