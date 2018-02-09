class CreateRoom < ActiveRecord::Migration[5.1]
  def change
    create_table :rooms do |t|
      t.belongs_to :dungeon
      t.integer :room_id
      t.string :description
      t.string :picture
      t.string :traps
      t.string :monsters
      t.string :treasure
    end
  end
end
