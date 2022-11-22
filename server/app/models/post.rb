class Post < ApplicationRecord
  include Rails.application.routes.url_helpers
  belongs_to :user
  belongs_to :dish
  has_one_attached :image

  def get_image_url
    url_for(self.image)
  end
end
