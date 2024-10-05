FactoryBot.define do
    factory :video_like do
        user
        video
        status {0}
    end
end