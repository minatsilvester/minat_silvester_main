defmodule MinatSilvesterMainWeb.SessionController do
  use MinatSilvesterMainWeb, :controller


  action_fallback MinatSilvesterMainWeb.FallbackController

  def create(conn, %{"session" => session_params}) do
    case MinatSilvesterMain.Helpers.authenticate_by_email_password(session_params) do
      {:ok, user} ->
        {:ok, jwt, _claims} = user |> MinatSilvesterMain.Guardian.encode_and_sign
        conn
        |> put_status(:created)
        |> put_view(MinatSilvesterMainWeb.SessionView)
        |> render("show.json", jwt: jwt, user: user)
      {:error, reason} ->
        conn
        |> put_status(401)
        |> put_view(MinatSilvesterMainWeb.SessionView)
        |> render("error.json", reason: reason)
    end
  end

  def delete(conn, _) do
    [token] = Plug.Conn.get_req_header(conn, "authorization")
    {:ok, claims} = MinatSilvesterMain.Guardian.revoke(token)
    conn
    |> render("delete.json")
  end
end
