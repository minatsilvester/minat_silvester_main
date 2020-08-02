defmodule MinatSilvesterMainWeb.CurrentUserController do
  use MinatSilvesterMainWeb, :controller

  action_fallback MinatSilvesterMainWeb.FallbackController


  def show(conn, _) do
    [token] = Plug.Conn.get_req_header(conn, "authorization")
    {:ok, user, claims} = MinatSilvesterMain.Guardian.resource_from_token(token)
    if user != nil do
      conn
      |> put_status(:ok)
      |> put_view(MinatSilvesterMainWeb.CurrentUserView)
      |> render("show.json", user: user)
    else
      conn
      |> put_status(:unauthorized)
      |> put_view(MinatSilvesterMainWeb.CurrentUserView)
      |> render("error.json", error: "Not Logged in")
    end
  end
end
