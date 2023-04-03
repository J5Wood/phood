class UsersController < ApplicationController

    def create
        if User.find_by(email: user_params[:email])
            render json: {status: "error", message: "That email is already registered"}
            return
        end
        user = User.new(user_params)
        user.user_id = SecureRandom.uuid
        if user.save
            render json: UserSerializer.new(user)
        else
            render json: {status: "error", message: user.errors.full_messages[0]}
        end
    end

    private 
    
    def user_params
        params.permit(:email, :password)
    end

end
