class RestaurantsController < ApplicationController

    def index
        restaurants = Restaurant.all
        if restaurants
            render json: RestaurantSerializer.new(restaurants)
        else
            render json: {status: "error", message: restaurants.errors.full_messages[0]}
        end
    end
end
