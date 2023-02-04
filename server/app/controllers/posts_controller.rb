class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: PostSerializer.new(posts)
    end

    def create
        # Will need to change user lookup to grab by token id
        # Need to make dish searchable or predetermined on front end
        user = User.find_by(id: params[:uid])
        dish = Dish.new(name: params[:dish])
        restaurant = Restaurant.new(name: params[:location])
        dish.restaurant = restaurant
        post = user.posts.new()
        post.dish = dish
        post.image.attach(params[:image])
        if post.save
            render json: PostSerializer.new(post)
        end
    end

    def show
        post = Post.find_by(id: params[:id])
        if(post)
            render json: PostSerializer.new(post)
        end
    end

    private
end