defmodule MinatSilvesterMainWeb.PageController do
  use MinatSilvesterMainWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
