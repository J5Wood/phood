class PostSerializer
    include JSONAPI::Serializer
    belongs_to :dish
  
    attribute :image_url do |post|
      "#{post.get_image_url}"
    end
  end