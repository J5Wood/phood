class RestaurantSerializer
    include JSONAPI::Serializer
    attributes :name, :address, :dishes
  end