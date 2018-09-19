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

ActiveRecord::Schema.define(version: 2018_09_19_221142) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "collections", force: :cascade do |t|
    t.string "name"
    t.string "info"
    t.string "img"
    t.string "year"
    t.string "artist"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "content", force: :cascade do |t|
    t.string "title"
    t.string "artist"
    t.string "src"
    t.bigint "collections_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["collections_id"], name: "index_content_on_collections_id"
  end

  create_table "locales", force: :cascade do |t|
    t.string "name"
    t.string "borough"
    t.decimal "lat"
    t.decimal "long"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "placements", force: :cascade do |t|
    t.string "title"
    t.string "msg"
    t.decimal "radius"
    t.bigint "locales_id"
    t.bigint "collections_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["collections_id"], name: "index_placements_on_collections_id"
    t.index ["locales_id"], name: "index_placements_on_locales_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "avi"
    t.string "bio"
    t.decimal "lat"
    t.decimal "lon"
    t.boolean "admin", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "content", "collections", column: "collections_id"
  add_foreign_key "placements", "collections", column: "collections_id"
  add_foreign_key "placements", "locales", column: "locales_id"
end
