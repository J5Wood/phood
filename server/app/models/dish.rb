class Dish < ApplicationRecord
  belongs_to :restaurant
  has_many :user_dishes
  has_many :users, through: :user_dishes
end
