class PlayerCharacter < ApplicationRecord
  belongs_to :user

  has_many :parties
  has_many :campaigns, through: :parties

  has_many :campaigns, foreign_key: :dm_id

  belongs_to :dm, class_name: "PlayerCharacter"
  has_many :adventurers, foreign_key: :dm_id, class_name: "PlayerCharacter"
end
