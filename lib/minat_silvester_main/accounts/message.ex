defmodule MinatSilvesterMain.Accounts.Message do
  use Ecto.Schema
  import Ecto.Changeset

  schema "messages" do
    field :from, :string
    field :messages, :string
    field :name, :string
    field :subject, :string
    field :text_body, :string

    timestamps()
  end

  @doc false
  def changeset(message, attrs) do
    message
    |> cast(attrs, [:messages, :name, :from, :subject, :text_body])
    |> validate_required([:name, :from, :subject, :text_body])
  end
end
