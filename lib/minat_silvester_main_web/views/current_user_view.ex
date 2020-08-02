defmodule MinatSilvesterMainWeb.CurrentUserView do
  use MinatSilvesterMainWeb, :view

  def render("show.json", %{user: user}) do
    %{
      user: user,
    }
  end

  def render("error.json", %{error: error}) do
    %{
      error: error,
    }
  end

end
