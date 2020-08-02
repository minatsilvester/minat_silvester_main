defmodule MinatSilvesterMain.Email do
  import Bamboo.Email

  def send_email(message) do
    new_email(
      to: "minatsilvester@gmail.com",
      from: message.from,
      subject: message.subject,
      text_body: message.text_body
    )
  end
end
