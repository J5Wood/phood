class PostSerializer
    include JSONAPI::Serializer
    attributes :get_image_url
    belongs_to :dish
    has_one :restaurant
  
    attribute :image_url do |post|
      "#{post.get_image_url}"
    end
  end