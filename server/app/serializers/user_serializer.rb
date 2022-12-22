class UserSerializer
    include JSONAPI::Serializer
    has_many :posts

    attribute :token do |object|
      "#{object.get_token}"
    end
  end