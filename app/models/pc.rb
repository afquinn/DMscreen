class Pc < ApplicationRecord

  CHARACTER_CLASSES = [
  "bard",
  "barbarian",
  "cleric",
  "druid",
  "fighter",
  "monk",
  "paladin",
  "ranger",
  "rogue",
  "sorcerer",
  "warlock",
  "wizard"
  ]

  mount_uploader :avatar, AvatarUploader

  validates :name,
    presence: true,
    uniqueness: true
  validates :level, 
    presence: true,
    numericality: true,
    inclusion: { in: 1..20 }
  validates :bio,
    presence: true
  validates :character_class,
    presence: true,
    inclusion:{in: CHARACTER_CLASSES}

  belongs_to :user
  belongs_to :campaign,
    optional: true


end
