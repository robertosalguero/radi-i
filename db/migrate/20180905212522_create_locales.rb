class CreateLocales < ActiveRecord::Migration[5.2]
  def change
    create_table :locales do |t|
      t.string :name
      t.string :borough
      t.decimal :lat
      t.decimal :long

      t.timestamps
    end
  end
end
