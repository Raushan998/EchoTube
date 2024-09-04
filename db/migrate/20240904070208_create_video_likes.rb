class CreateVideoLikes < ActiveRecord::Migration[7.1]
  def change
    create_table :video_likes do |t|
      t.references :user
      t.references :video
      t.integer :status
      t.timestamps
    end
  end
end
