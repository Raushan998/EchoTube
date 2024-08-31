class AddIndexToTitleAndVideoContentType < ActiveRecord::Migration[7.1]
  def change
    add_index :videos, :title
    add_index :videos, :video_content_type
  end
end
