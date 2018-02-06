require 'rails_helper'

RSpec.configure do |config|
  config.include(Shoulda::Matchers::ActiveRecord, type: :model)
end

RSpec.describe User, type: :model do

  it { should have_many :player_characters }


  it { should have_valid(:user_name).when('John') }
  it { should_not have_valid(:user_name).when(nil, '') }


  it { should have_valid(:email).when('jsnow@gmail.com') }
  it { should_not have_valid(:email).when(nil, '', 'jsnow') }

  it 'has a matching password confirmation for the password' do
    user = User.new
    user.password = 'password'
    user.password_confirmation = 'anotherpassword'

    expect(user).to_not be_valid
    expect(user.errors[:password_confirmation]).to_not be_blank
  end
end
