require "rails_helper"

RSpec.describe Video, type: :model do
    it 'belongs to a user' do
        association = Video.reflect_on_association(:user)
        expect(association.macro).to eq(:belongs_to)
    end

    it 'has_many video_likes' do
        association = Video.reflect_on_association(:video_likes)
        expect(association.macro).to eq(:has_many)
        expect(association.options[:dependent]).to eq(:destroy)
    end
end