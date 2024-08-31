class RenameColumnToVideo < ActiveRecord::Migration[7.1]
  def change
    rename_column :videos, :type, :video_content_type
  end
end
