defmodule MinatSilvesterMain.Contents.Category do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:description, :name, :image]}

  schema "categories" do
    field :image, :binary
    field :name, :string
    field :description, :string
    field :color, :string
    field :link, :string

    timestamps()
  end

  @doc false
  def changeset(category, attrs) do
    category
    |> cast(attrs, [:name, :image, :description, :color, :link])
    |> validate_required([:name, :image, :color, :link])
  end
end
