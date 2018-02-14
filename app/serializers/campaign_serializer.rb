class CampaignSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :dm_id, :dm, :pcs

  has_many :pcs

  has_many :dungeons

  has_one :dm

end
