class Product < ApplicationRecord
  has_one_attached :image
  def photo
    if image.attached?
      image
    else
      '/undefind.png'
    end
  end
end
