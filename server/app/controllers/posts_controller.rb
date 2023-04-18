class PostsController < ApplicationController

    def index
        if(user_params == "null")
            posts = Post.all()
        else
            user = User.find_by(id: user_params)
            posts = Post.where(user: user)
        end
        if(posts)
            render json: PostSerializer.new(posts)
        end
    end

    def create
        # Will need to change user lookup to grab by token id
        # Need to make dish searchable or predetermined on front end
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
    
end