FactoryBot.define do
    factory :video do
        title {Faker::Name.name}
        video_url {Faker::Internet.url}
        user
        video_content_type {Faker::Lorem.words.join(" ")}
    end
end