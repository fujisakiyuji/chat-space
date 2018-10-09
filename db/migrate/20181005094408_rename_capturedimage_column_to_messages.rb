class RenameCapturedimageColumnToMessages < ActiveRecord::Migration[5.0]
  def change
    rename_column :messages, :captured_image, :image
  end
end
