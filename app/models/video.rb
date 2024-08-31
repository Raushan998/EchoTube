# frozen_string_literal: true

class Video < ApplicationRecord
  belongs_to :user, class_name: 'User', foreign_key: 'user_id'

  scope :search_by, lambda { |search_query|
    where(
      'title ILIKE :query OR video_content_type ILIKE :query',
      query: "%#{search_query.to_s.downcase}%"
    )
  }
end
