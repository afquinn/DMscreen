class CreatePlayerCharacter < ActiveRecord::Migration[5.1]
  def change
    create_table :player_characters do |t|
      t.belongs_to :user, null: false
      t.string :name, null: false
      t.string :avatar
      t.integer :character_sheet
    end
  end
end
