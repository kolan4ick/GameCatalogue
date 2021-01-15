class Product < ApplicationRecord
  has_one_attached :image

  has_many :category_products
  has_many :categories, through: :category_products
  # has_rich_text :body
  def category_names
    categories.collect do |category|
      category.name
    end.join(', ')
  end

  def category_names=(categories_string)
    category_names = categories_string.split(',').collect { |s| s.strip.downcase }.uniq
    new_or_found_categories = category_names.collect { |name| Category.find_or_create_by(name: name) }
    self.categories = new_or_found_categories
  end

  def photo
    if image.attached?
      image
    else
      '/undefind.png'
    end
  end

  def set_image=(src)
    file = URI.parse(src).open
    image.attach(io: file, filename: title)
  rescue OpenURI::HTTPError => e
    pp e
  end
end
