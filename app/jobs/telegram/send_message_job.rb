class Telegram::SendMessageJob < ApplicationJob
  queue_as :default

  def perform(text)
    token = '1594270206:AAHCjWk0h44SAoXiBwUeIT7-Bj3L5lqzJcI'
    Telegram::Bot::Client.run(token) do |bot|
      bot.api.send_message(chat_id: 763954681, text: text)
    end
  end
end
