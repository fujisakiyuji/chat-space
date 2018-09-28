# README

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|text|text|null: false|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|title|string|null: false|

### Association
- has_many :members
- has_many :messages
- has_many :captured_images


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
|member_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|nickname|string|null: false|

### Association
- has_many :members
- has_many :captured_images
- has_many :messages
