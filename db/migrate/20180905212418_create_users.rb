class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :avi
      t.string :bio
      t.decimal :lat
      t.decimal :long
      t.boolean :admin, default: false

      t.timestamps
    end
  end
end
