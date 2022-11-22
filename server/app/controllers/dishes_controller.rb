class DishesController < ApplicationController

    def index
        dishes = Dish.all
        if dishes
            render json: DishSerializer.new(dishes)
        else
            render json: {status: "error", message: dishes.errors.full_messages[0]}
        end
    end

end
