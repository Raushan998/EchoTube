# frozen_string_literal: true

class VideoLike < ApplicationRecord
  enum status: { like: 0, dislike: 1 }
  belongs_to :user
  belongs_to :video
end
