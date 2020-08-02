defmodule MinatSilvesterMainWeb.MessageView do
  use MinatSilvesterMainWeb, :view
  alias MinatSilvesterMainWeb.MessageView

  def render("index.json", %{messages: messages}) do
    %{data: render_many(messages, MessageView, "message.json")}
  end

  def render("show.json", %{message: message}) do
    %{data: render_one(message, MessageView, "message.json")}
  end

  def render("message.json", %{message: message}) do
    %{id: message.id,
      messages: message.messages,
      name: message.name,
      from: message.from,
      subject: message.subject,
      text_body: message.text_body}
  end
end
