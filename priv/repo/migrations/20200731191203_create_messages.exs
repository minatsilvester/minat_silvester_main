defmodule MinatSilvesterMain.Repo.Migrations.CreateMessages do
  use Ecto.Migration

  def change do
    create table(:messages) do
      add :messages, :string
      add :name, :string
      add :from, :string
      add :subject, :text
      add :text_body, :text

      timestamps()
    end

  end
end
