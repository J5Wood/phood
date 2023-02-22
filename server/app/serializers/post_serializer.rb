class PostSerializer
    include JSONAPI::Serializer
    attributes :get_image_url, :dish, :restaurant
  end