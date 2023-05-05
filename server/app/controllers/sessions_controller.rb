class SessionsController < ApplicationController

    def authenticate
        token = request.headers['Authorization'].split(' ')[1] 
        decoded_hash = (JWT.decode(token, secret_key, true, algorithm: 'HS256'))
        if (!decoded_hash.empty?)
            user = User.find_by(user_id: decoded_hash[0]["user_id"])
            if(user)
                render json: true
            else
                render json: false
            end
        end
    end

    def create
        user = User.find_by(email: session_params[:email])
        if !!user && user.authenticate(session_params[:password])
            render json: UserSerializer.new(user)
        else
            render json: {status: "error", message: "Must contain a valid username and password"}
        end
    end

    def auto_login
        token = request.headers['Authorization'].split(' ')[1] 
        decoded_hash = (JWT.decode(token, secret_key, true, algorithm: 'HS256'))
        if (!decoded_hash.empty?)
            user = User.find_by(user_id: decoded_hash[0]["user_id"])
            if (user)
                render json: UserSerializer.new(user)
            else
                render json: {status: "error", message: user.errors.full_messages[0]}
            end
        end
    end

    private
    def session_params
        params.require(:session).permit(:email, :password)
    end

    def secret_key
        Rails.application.credentials.secret_jwt_key
    end

end
