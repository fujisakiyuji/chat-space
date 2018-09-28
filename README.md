# README

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|text|text|null: false|
|captured_image|string||

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|title|string|null: false|

### Association
- has_many :members
- has_many :users, through: :members
- has_many :messages


## membersテーブル

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
|nickname|string|null: false, add_index :users, nickname, :unique => true|

### Association
- has_many :members
- has_many :groups, through: :members
- has_many :messages
