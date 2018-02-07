class CreateCampaign < ActiveRecord::Migration[5.1]
  def change
    create_table :campaigns do |t|
      t.string :name
      t.string :description
      t.string :cover_photo
      

      t.timestamps
    end
  end
end
