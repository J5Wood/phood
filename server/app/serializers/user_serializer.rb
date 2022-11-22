class UserSerializer
    include JSONAPI::Serializer
    attributes :email
    has_many :posts
  end