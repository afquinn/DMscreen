class Abutter < ApplicationRecord
  belongs_to :ingress, class_name: "Room"
  belongs_to :egress, class_name: "Room"
end
