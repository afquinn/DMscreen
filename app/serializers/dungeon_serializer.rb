class DungeonSerializer < ActiveModel::Serializer
  attributes :id, :name, :master_floor_plan, :campaigns
  has_many :campaigns

  has_many :pcs, through: :campaigns
end
