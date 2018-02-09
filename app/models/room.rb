class Room < ApplicationRecord
  belongs_to :dungeon

  has_many :ingress_abutters, foreign_key: :egress_id, class_name: "Abutter"

  has_many :egress_abutters, foreign_key: :ingress_id, class_name: "Abutter"

  has_many :ingresses, through: :ingress_abutters, source: :ingress

  has_many :egresses, through: :egress_abutters, source: :egress

end
