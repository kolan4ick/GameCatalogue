# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
30.times do
  product = Product.create!(
    title: Faker::Game.title,
    body: Faker::Movie.quote,
    genre: Faker::Game.genre,
    developer: Faker::Name.name,
    age_limit: Faker::Number.within(range: 1..21)
  )
  begin
    file = URI.parse('https://picsum.photos/300').open
    product.image.attach(io: file, filename: product.title.to_s)
  rescue OpenURI::HTTPError => e
    pp e
  end
end
