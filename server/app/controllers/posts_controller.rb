class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: PostSerializer.new(posts)
    end

    def create
        # Find user and attach to post
        # Will need dish name as well
        post = Post.new(post_params)
        byebug
        render json: PostSerializer.new(post)
    end

    private

    def post_params
        params.permit(:image)
    end
end
