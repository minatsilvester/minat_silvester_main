defmodule MinatSilvesterMain.Guardian do
  use Guardian, otp_app: :minat_silvester_main

  alias MinatSilvesterMain.Repo
  alias MinatSilvesterMain.Helpers
  alias MinatSilvesterMain.Accounts.User

  def subject_for_token(user = %User{}, _claims) do
    sub = to_string(user.id)
    {:ok, sub}
  end
  def subject_for_token(_, _) do
    {:error, "Unknown resource type"}
  end

  def resource_from_claims(claims) do
    id = claims["sub"]
    user = Helpers.get_resource_by_id(id)
    {:ok, user}
  end
  def resource_from_claims(_claims) do
    {:error, "Unknown resource type"}
  end
end
