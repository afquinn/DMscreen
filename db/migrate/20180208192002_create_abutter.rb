class CreateAbutter < ActiveRecord::Migration[5.1]
  def change
    create_table :abutters do |t|
      t.belongs_to :ingress
      t.belongs_to :egress
    end
  end
end
