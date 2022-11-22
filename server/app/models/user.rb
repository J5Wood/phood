class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :dishes, through: :posts
  has_secure_password
  validates :email, :password, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }
end
