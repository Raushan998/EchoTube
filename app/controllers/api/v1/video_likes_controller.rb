# frozen_string_literal: true

module Api
  module V1
    class VideoLikesController < ApplicationController
      before_action :authenticate_user!
      before_action :set_video_like, only: %i[create show]

      def create
        if @video_like.blank?
          @video_like = VideoLike.create!(video_like_params)
        else
          @video_like.update!(video_like_params)
        end

        render json: @video_like, status: :created
      rescue StandardError => e
        render json: { error: e.message }, status: :unprocessable_entity
      end

      def show
        render json: @video_like, status: :ok
      end

      private

      def video_like_params
        params.require(:video_like).permit(:user_id, :video_id, :status)
      end

      def set_video_like
        @video_like = VideoLike.where(
          video_id: video_like_params[:video_id],
          user_id: video_like_params[:user_id]
        ).first
      end
    end
  end
end
