defmodule MinatSilvesterMain.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:username, :password, :approved]}

  schema "users" do
    field :password, :string
    field :username, :string
    field :approved, :string, default: "no"

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :password, :approved])
    |> validate_required([:username, :password])
    |> unique_constraint(:username)
    |> check_admin
    |> generate_encrypted_password
  end

  def check_admin(current_changeset) do
    case current_changeset do
      %Ecto.Changeset{valid?: true, changes: %{username: email}} ->
        if email == "minatsilvester33" do
          new_changeset = put_change(current_changeset, :approved, "yes")
          new_changeset
        else
           current_changeset
        end
      _ ->
          current_changeset
    end
  end

  defp generate_encrypted_password(current_changeset) do
    case current_changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: password}} ->
        new_changeset = put_change(current_changeset, :password, Bcrypt.hash_pwd_salt(password))
        new_changeset
      _ ->
        current_changeset
    end
  end
end
