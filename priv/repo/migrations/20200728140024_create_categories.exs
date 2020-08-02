defmodule MinatSilvesterMain.Repo.Migrations.CreateCategories do
  use Ecto.Migration

  def change do
    create table(:categories) do
      add :name, :string
      add :image, :binary

      timestamps()
    end

  end
end
