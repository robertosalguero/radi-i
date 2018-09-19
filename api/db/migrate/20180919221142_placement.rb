class Placement < ActiveRecord::Migration[5.2]
  def change
    create_table :placements do |t|
      t.string :title
      t.string :msg
      t.decimal :radius
      t.references :locales, index: true, foreign_key: true
      t.references :collections, index: true, foreign_key: true


      t.timestamps
    end
  end
end
