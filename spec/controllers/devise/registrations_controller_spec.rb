# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Registration Controller API', type: :request do
  describe 'POST /signup' do
    context 'when signup' do
      it 'creates the user' do
        post '/signup',
             params: {
               'user': {
                 'email': 'abc@mail.com',
                 'password': '123456',
                 'password_confirmation': '123456'
               }
             },
             headers: {
               'Content-Type' => 'application/json'
             },
             as: :json
        expect(response).to have_http_status(:ok)
        parsed_response = JSON.parse(response.body)
        expect(parsed_response['data']).to include(
          'email' => 'abc@mail.com'
        )
        expect(User.find_by(email: 'abc@mail.com').jti).not_to be_nil
      end
    end
  end
end
