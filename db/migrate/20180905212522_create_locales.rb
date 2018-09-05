class CreateLocales < ActiveRecord::Migration[5.2]
  def change
    create_table :locales do |t|
      t.string :name
      t.string :coord

      t.timestamps
    end
  end
end
