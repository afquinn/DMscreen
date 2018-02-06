class CreateParty < ActiveRecord::Migration[5.1]
  def change
    create_table :parties do |t|
      t.belongs_to :player_characters
      t.belongs_to :campaigns
    end
  end
end
