class CreateContent < ActiveRecord::Migration[5.2]
  def change
    create_table :content do |t|
      t.string :title
      t.string :artist
      t.string :src
      t.references :collection, index: true, foreign_key: true

      t.timestamps
    end
  end
end
