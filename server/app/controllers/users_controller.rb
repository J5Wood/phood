class UsersController < ApplicationController

    def index
        users = User.all
        render json: UserSerializer.new(users)
    end

    def create
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
