class Campaign < ApplicationRecord
  has_many :parties
  has_many :player_characters, through: :parties
end
