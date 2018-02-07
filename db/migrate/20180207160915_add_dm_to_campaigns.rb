class AddDmToCampaigns < ActiveRecord::Migration[5.1]
  def change
    add_column :campaigns, :dm_id, :integer, null: false
  end
end
