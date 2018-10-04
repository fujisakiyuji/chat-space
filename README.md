# README

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|text|text|null: false|
|captured_image|string||

### Association
- belongs_to :user


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :group_user
- has_many :users, through: :group_user


## group_userテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル
#### gem "devise"

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index :users, name, :unique => true|

### Association
- has_many :group_user
- has_many :groups, through: :group_user
- has_many :messages
