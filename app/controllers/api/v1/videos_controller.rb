# frozen_string_literal: true

module Api
  module V1
    class VideosController < ApplicationController
      before_action :set_video, only: [:show]
      def index
        @videos = if params[:search]
                    Video.search_by(params[:search])
                  else
                    Video.all
                  end
        render json: @videos, status: :ok
      end

      def show
        render json: @video, status: :ok
      end

      private

      def set_video
        @video = Video.find(params[:id])
      rescue StandardError => e
        render json: { error: e.message }, status: :unprocessable_entity
      end
    end
  end
end
