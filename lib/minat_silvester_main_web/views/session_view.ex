defmodule MinatSilvesterMainWeb.SessionView do
  use MinatSilvesterMainWeb, :view

  def render("show.json", %{jwt: jwt, user: user}) do
    IO.inspect("show rendered")
    %{
      jwt: jwt,
      user: user,
    }
  end

  def render("error.json", %{reason: reason}) do
    %{error: reason}
  end

  def render("delete.json", _) do
    %{ok: true}
  end

  def render("forbidden.json", %{error: error}) do
    %{error: error}
  end

end
