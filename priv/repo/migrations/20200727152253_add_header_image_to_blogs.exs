defmodule MinatSilvesterMain.Repo.Migrations.AddHeaderImageToBlogs do
  use Ecto.Migration

  def change do
    alter table(:blogs) do
      add :header_image, :binary
    end
  end
end
