class CreateDungeonCampaign < ActiveRecord::Migration[5.1]
  def change
    create_table :dungeon_campaigns do |t|
      t.belongs_to :campaign, null: false
      t.belongs_to :dungeon, null: false
    end
  end
end
