class CreatePcs < ActiveRecord::Migration[5.1]
  def change
    create_table :pcs do |t|
      t.belongs_to :user, null: false
      t.belongs_to :campaign, null: false
      t.string :name, null: false
      t.string :avatar
      t.integer :level, null: false, default: 1
      t.string :character_class
      t.string :bio

    end
  end
end
