class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title
      t.string :body
      t.string :genre
      t.string :developer
      t.integer :age_limit
      t.timestamps
    end
  end
end
