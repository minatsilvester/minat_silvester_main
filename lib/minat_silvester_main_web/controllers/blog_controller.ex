defmodule MinatSilvesterMainWeb.BlogController do
  use MinatSilvesterMainWeb, :controller

  alias MinatSilvesterMain.Accounts
  alias MinatSilvesterMain.Accounts.Blog

  action_fallback MinatSilvesterMainWeb.FallbackController

  def index(conn, _params) do
    blogs = Accounts.list_blogs()
    IO.inspect(blogs)
    render(conn, "index.json", blogs: blogs)
  end

  def create(conn, %{"blog" => blog_params}) do
    with {:ok, %Blog{} = blog} <- Accounts.create_blog(blog_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.blog_path(conn, :show, blog))
      |> render("show.json", blog: blog)
    end
  end

  def show(conn, %{"id" => id}) do
    blog = Accounts.get_blog!(id)
    render(conn, "show.json", blog: blog)
  end

  def update(conn, %{"id" => id, "blog" => blog_params}) do
    blog = Accounts.get_blog!(id)

    with {:ok, %Blog{} = blog} <- Accounts.update_blog(blog, blog_params) do
      render(conn, "show.json", blog: blog)
    end
  end

  def delete(conn, %{"id" => id}) do
    blog = Accounts.get_blog!(id)

    with {:ok, %Blog{}} <- Accounts.delete_blog(blog) do
      send_resp(conn, :no_content, "")
    end
  end
end
