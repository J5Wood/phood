class PostSerializer
    include JSONAPI::Serializer
    attributes :get_image_url
    belongs_to :dish
    has_one :restaurant
  end