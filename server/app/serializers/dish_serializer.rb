class DishSerializer
    include JSONAPI::Serializer
    attributes :name, :posts

    # attribute :image_url do |dish|
    #     dish.posts do |post|
    #         "#{post.get_image_url}"
    #     end
    # end
  end