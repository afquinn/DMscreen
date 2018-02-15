class RoomSerializer < ActiveModel::Serializer
  attributes :id, :traps, :monsters, :description, :treasure, :picture

  has_one :dungeon

  belongs_to :egresses

  
end
