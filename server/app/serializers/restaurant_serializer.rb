class RestaurantSerializer
    include JSONAPI::Serializer
    attributes :name, :address
    has_many :dishes
  end