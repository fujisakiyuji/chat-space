class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :group_id, null: false, foreign_key: true
      t.text :text, null: false
      t.string :captured_image
      t.timestamps
    end
  end
end
