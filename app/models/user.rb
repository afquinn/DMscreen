class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  validates :user_name, presence: true

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :pcs
  has_many :campaigns, through: :pcs

  has_many :campaign_modules, foreign_key: :dm_id, class_name: "Campaign"


end
