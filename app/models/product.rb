class Product < ApplicationRecord
  has_one_attached :image

  has_many :category_products
  has_many :categories, through: :category_products

  validates :title, uniqueness: true, presence: true, length: { minimum: 3, maximum:30 }
  validates :body, presence: true, length: { maximum: 400 }
  validates :genre, presence: true, length: { minimum: 3, maximum:30 }
  validates :age_limit, presence: true, numericality: { greater_than_or_equal_to: 1, only_integer: true }
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
def self.import(file)
    spreadsheet = open_spreadsheet(file)
    sheet = spreadsheet.sheet(spreadsheet.sheets[0])
    pp header = sheet.row(sheet.first_row)
    (sheet.first_row + 1..sheet.last_row).each do |i|
      row = Hash[[header, sheet.row(i)].transpose]
      if row['id'].blank?
        product = Product.find_or_create_by(title: row['title'])
        row['id'] = product.id
      else
        product = Product.find_by(id: row['id'])
      end
      product.update(row)
    end
  end

  def self.open_spreadsheet(file)
      case File.extname(file.original_filename)
      when '.csv' then Roo::Csv.new(file.path)
      when '.xls' then Roo::Excel.new(file.path)
      when '.xlsx' then Roo::Excelx.new(file.path)
      else raise "Unknown file type: #{file.original_filename}"
      end
    end
end
