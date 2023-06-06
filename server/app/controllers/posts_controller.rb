class PostsController < ApplicationController

    def index
        if !!request.headers["Authorization"]
            token = request.headers['Authorization'].split(' ')[1]
            if token.length != 132
                return render json: {status: "error", message: "Invalid token"}
            end
            decoded_hash = (JWT.decode(token, secret_key, true, algorithm: 'HS256'))
            if (!decoded_hash.empty?)
                user = User.find_by(user_id: decoded_hash[0]["user_id"])
                if user
                    posts = Post.where(user: user)
                end
            else
                return render json: {status: "error", message: "Invalid token"}
            end
        else 
            posts = Post.all()
        end
        if(posts)
            render json: PostSerializer.new(posts)
        else
            return render json: {status: "error", message: "Error processing request."}
        end
    end

    def create
        #todo Will need to change user lookup to grab by token id
        #todo Need to make dish searchable or predetermined on front end
        user = User.find_by(id: user_params)
        dish = Dish.new(name: dish_params)
        restaurant = Restaurant.new(name: restaurant_params[0], address: restaurant_params[1])
        dish.restaurant = restaurant
        post = user.posts.new()
        post.dish = dish
        post.image.attach(post_params)
        if post.save
            render json: {"postId": post.id}
        end
    end

    def show
        post = Post.find_by(id: params[:id])
        if(post)
            render json: PostSerializer.new(post)
        end
    end

    private

    def user_params
        params.require(:uid)
    end

    def dish_params
        params.require(:dish)
    end

    def post_params
        params.require(:image)
    end
    
    def restaurant_params
        [params.require(:location).split(",")[0], params.require(:location).split(",").slice(1..).join.strip]
    end

    def secret_key
        Rails.application.credentials.secret_jwt_key
    end
    
end