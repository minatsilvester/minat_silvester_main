defmodule MinatSilvesterMain.Repo.Migrations.CreateBlogs do
  use Ecto.Migration

  def change do
    create table(:blogs) do
      add :title, :string
      add :description, :text
      add :link, :string
      add :color, :string

      timestamps()
    end

  end
end
