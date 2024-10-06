# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Video Controller API', type: :request do
  let!(:videos) { create_list(:video, 6) }

  describe 'GET /api/v1/videos' do
    context 'when fetching all videos' do
      it 'returns all videos as JSON' do
        get '/api/v1/videos',
            headers: {
              'Content-Type' => 'application/json'
            },
            as: :json

        expect(response).to have_http_status(:ok)
        parsed_response = JSON.parse(response.body)
        expect(parsed_response.size).to eq(6)
      end
    end

    context 'when filtering by title' do
      it 'filters videos by title' do
        get '/api/v1/videos',
            params: {
              search: Video.first.title
            },
            headers: {
              'Content-Type' => 'application/json'
            },
            as: :json

        expect(response).to have_http_status(:ok)
        parsed_response = JSON.parse(response.body)
        expect(parsed_response.size).to eq(1)
      end
    end
  end

  describe 'GET /api/v1/videos/:id' do
    context 'when fetching a specific video' do
      let(:video) { videos.first }

      it 'returns the video by id' do
        get "/api/v1/videos/#{video.id}",
            headers: {
              'Content-Type' => 'application/json'
            },
            as: :json

        expect(response).to have_http_status(:ok)
        parsed_response = JSON.parse(response.body)
        expect(parsed_response).to include(
          'id' => video.id,
          'title' => video.title,
          'user_id' => video.user_id,
          'video_content_type' => video.video_content_type,
          'video_url' => video.video_url
        )
      end
    end
  end
end
