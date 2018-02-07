class Campaign < ApplicationRecord
  has_many :pcs
  has_many :users, through: :pcs

  belongs_to :dm, class_name: "User"
end
