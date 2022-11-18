class CreateUserDishes < ActiveRecord::Migration[6.1]
  def change
    create_table :user_dishes do |t|
      t.references :user, null: false, foreign_key: true
      t.references :dish, null: false, foreign_key: true

      t.timestamps
    end
  end
end
