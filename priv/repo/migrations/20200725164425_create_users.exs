defmodule MinatSilvesterMain.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :username, :string
      add :password, :string
      add :approved, :string

      timestamps()
    end

    create unique_index(:users, [:username])

  end
end
