class CreateDungeon < ActiveRecord::Migration[5.1]
  def change
    create_table :dungeons do |t|
      t.string :name, null: false
      t.string :cover_picture
      t.string :description
      t.string :master_floor_plan
    end
  end
end
