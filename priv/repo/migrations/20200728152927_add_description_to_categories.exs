defmodule MinatSilvesterMain.Repo.Migrations.AddDescriptionToCategories do
  use Ecto.Migration

  def change do
    alter table(:categories) do
      add :description, :text
      add :color, :string
      add :link, :string
    end
  end
end
