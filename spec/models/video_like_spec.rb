require 'rails_helper'

RSpec.describe VideoLike, type: :model do
    it 'belongs to a user' do
        association = VideoLike.reflect_on_association(:user)
        expect(association.macro).to eq(:belongs_to)
    end

    it 'belongs to a video' do
        association = VideoLike.reflect_on_association(:video)
        expect(association.macro).to eq(:belongs_to)
    end
end