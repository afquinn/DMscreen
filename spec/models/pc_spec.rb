require 'rails_helper'

RSpec.describe Pc, type: :model do

  it { should belong_to(:user) }

  it { should have_valid(:name).when('Jamie Lanister') }
  it { should_not have_valid(:name).when(nil, '') }

  it { should have_valid(:level).when(5) }
  it { should_not have_valid(:level).when(nil, '') }
  it { should_not have_valid(:level).when(100) }

  it { should have_valid(:character_class).when('wizard') }
  it { should_not have_valid(:character_class).when(nil, '') }

  it { should have_valid(:bio).when('If you really want to hear about it, the first thing youll probably want to know is where I was born, and what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I dont feel like going into it, if you want to know the truth.') }
  it { should_not have_valid(:bio).when(nil, '') }

end
