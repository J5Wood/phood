class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :dishes, through: :posts
  has_secure_password
  validates :email, :password, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }


  def get_token
    id_object = {user_id: self.user_id}
    token = encode_token(id_object)
  end

  def encode_token(id_object)
    JWT.encode(id_object, secret_key)
  end

  def secret_key
    Rails.application.credentials.secret_jwt_key
  end

end
