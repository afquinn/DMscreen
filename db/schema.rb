# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180208192002) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "abutters", force: :cascade do |t|
    t.bigint "ingress_id"
    t.bigint "egress_id"
    t.index ["egress_id"], name: "index_abutters_on_egress_id"
    t.index ["ingress_id"], name: "index_abutters_on_ingress_id"
  end

  create_table "campaigns", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "cover_photo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "dm_id", null: false
  end

  create_table "dungeon_campaigns", force: :cascade do |t|
    t.bigint "campaign_id", null: false
    t.bigint "dungeon_id", null: false
    t.index ["campaign_id"], name: "index_dungeon_campaigns_on_campaign_id"
    t.index ["dungeon_id"], name: "index_dungeon_campaigns_on_dungeon_id"
  end

  create_table "dungeons", force: :cascade do |t|
    t.string "name", null: false
    t.string "cover_picture"
    t.string "description"
    t.string "master_floor_plan"
  end

  create_table "pcs", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "campaign_id", null: false
    t.string "name", null: false
    t.string "avatar"
    t.index ["campaign_id"], name: "index_pcs_on_campaign_id"
    t.index ["user_id"], name: "index_pcs_on_user_id"
  end

  create_table "rooms", force: :cascade do |t|
    t.bigint "dungeon_id"
    t.integer "room_id"
    t.string "description"
    t.string "picture"
    t.string "traps"
    t.string "monsters"
    t.string "treasure"
    t.index ["dungeon_id"], name: "index_rooms_on_dungeon_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "user_name"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
