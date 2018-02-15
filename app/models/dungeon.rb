class Dungeon < ApplicationRecord
  has_many :dungeon_campaigns
  has_many :campaigns, through: :dungeon_campaigns
  has_many :pcs, through: :campaigns

  has_many :rooms
end
