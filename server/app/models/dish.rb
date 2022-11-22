class Dish < ApplicationRecord
  belongs_to :restaurant
  has_many :posts, dependent: :destroy
  has_many :users, through: :posts
end
