require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    sequence(:user_name) {|n| "MR.#{n}" }
    password 'password'
    password_confirmation 'password'
  end

end
