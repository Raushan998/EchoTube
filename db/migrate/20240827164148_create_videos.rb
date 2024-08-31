class CreateVideos < ActiveRecord::Migration[7.1]
  def change
    create_table :videos do |t|
      t.text :video_url
      t.string :title
      t.references :user
      t.text :type
      t.timestamps
    end
  end
end
