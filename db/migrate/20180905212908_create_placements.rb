class CreatePlacements < ActiveRecord::Migration[5.2]
  def change
    create_table :placements do |t|
      t.string :locale_id
      t.string :collection_id
      t.string :title
      t.string :msg
      t.string :radius

      t.timestamps
    end
  end
end
