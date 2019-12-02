class CreateComics < ActiveRecord::Migration[5.2]
  def change
    create_table :comics do |t|
      t.string :month
      t.integer :num
      t.string :link
      t.string :year
      t.string :news
      t.string :safe_title
      t.string :transcript
      t.string :alt
      t.string :img
      t.string :title
      t.string :day
    end
  end
end
