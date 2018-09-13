class Collections < ActiveRecord::Migration[5.2]
  def change
    create_table :collections do |t|
      t.string :name
      t.string :info
      t.string :img
      t.string :year
      t.string :artist

      t.timestamps
    end
  end
end
