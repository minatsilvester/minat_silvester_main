defmodule MinatSilvesterMain.Accounts.Blog do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:description, :link, :title, :header_image, :color]}

  schema "blogs" do
    field :description, :string
    field :link, :string
    field :title, :string
    field :header_image, :binary
    field :color, :string

    timestamps()
  end

  @doc false
  def changeset(blog, attrs) do
    blog
    |> cast(attrs, [:title, :description, :link, :header_image, :color])
    |> validate_required([:title, :description, :link, :color])
  end
end
