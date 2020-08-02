defmodule MinatSilvesterMain.Helpers do
  alias MinatSilvesterMain.Repo
  alias MinatSilvesterMain.Accounts.User

  def get_resource_by_id(id) do
    Repo.get!(User, String.to_integer(id))
  end

  def authenticate_by_email_password(%{"username" => username, "password" => given_password}) do
    user = Repo.get_by(User, username: username)

    cond do
      user && Bcrypt.verify_pass(given_password, user.password) && user.approved == "yes" ->
        {:ok, user}
      user && Bcrypt.verify_pass(given_password, user.password) ->
        {:ok, "Not Aproved"}
      user ->
        {:error, "Wrong Password"}
      true ->
        {:error, "Account does not exist"}
    end
  end

end
