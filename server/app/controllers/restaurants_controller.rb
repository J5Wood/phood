class RestaurantsController < ApplicationController

    def show
        restaurant = Restaurant.find_by(id: params[:id])
        if !!restaurant
            render json: RestaurantSerializer.new(restaurant)
        else
            # ! Error
            render json: {"error": "Restaurant Not Found."}
        end
    end
end
