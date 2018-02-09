class Campaign < ApplicationRecord
  has_many :pcs
  has_many :users, through: :pcs

  has_many :dungeon_campaigns
  has_many :dungeons, through: :dungeon_campaigns

  belongs_to :dm, class_name: "User"

end
