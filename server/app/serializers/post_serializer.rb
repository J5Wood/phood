class PostSerializer
    include JSONAPI::Serializer
  
    attribute :image_url do |post|
      "#{post.get_image_url}"
    end
  end