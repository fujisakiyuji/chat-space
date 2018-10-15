json.messages @messages.each do |message|
  json.user_name  message.user.name
  json.created_at message.created_at.to_s(:datetime)
  json.text       message.text
  json.image      message.image
  json.id         message.id
end
