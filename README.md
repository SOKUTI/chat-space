# DataBase Design

## user table
|column  |type   |option                   |
|--------|-------|-------------------------|
|id      |integer|null: false, unique: true|
|name    |string |null: false, unique: true|
|email   |string |null: false, unique: true|
|password|string |null: false              |

### Association
- has_many :comments
- has_many :groups, through: :groups_users

## group table
|column    |type   |option                   |
|----------|-------|-------------------------|
|id        |integer|null: false, unique: true|
|group_name|string |null: false              |

### Association
- has_many :comments
- has_many :users, through: :groups_users

## comments table
|column     |type   |option                        |
|-----------|-------|------------------------------|
|user_id    |integer|null: false, foreign_key: true|
|group_id   |integer|null: false, foreign_key: true|
|comment    |text   |null: false                   |
|date       |date   |null: false                   |

### Association
- belongs_to :user
- belongs_to :group

## groups_users table
|column     |type   |option                        |
|-----------|-------|------------------------------|
|user_id    |integer|null: false, foreign_key: true|
|group_id   |integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
