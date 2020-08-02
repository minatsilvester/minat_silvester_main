defmodule MinatSilvesterMainWeb.BlogView do
  use MinatSilvesterMainWeb, :view
  alias MinatSilvesterMainWeb.BlogView

  def render("index.json", %{blogs: blogs}) do
    %{data: render_many(blogs, BlogView, "blog.json")}
  end

  def render("show.json", %{blog: blog}) do
    %{data: render_one(blog, BlogView, "blog.json")}
  end

  def render("blog.json", %{blog: blog}) do
    %{id: blog.id,
      title: blog.title,
      header_image: blog.header_image,
      description: blog.description,
      link: blog.link,
      color: blog.color
    }
  end
end
