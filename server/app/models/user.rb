class User < ApplicationRecord
  has_many :user_dishes
  has_many :dishes, through: :user_dishes
  has_secure_password
  validates :email, :password, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }
end
