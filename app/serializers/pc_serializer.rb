class PcSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :level, :character_class, :bio, :dm

  def dm
    object.campaign.dm.user_name
  end

  belongs_to :user
  belongs_to :campaign
end
