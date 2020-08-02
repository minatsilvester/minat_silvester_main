defmodule MinatSilvesterMainWeb.CategoryView do
  use MinatSilvesterMainWeb, :view
  alias MinatSilvesterMainWeb.CategoryView

  def render("index.json", %{categories: categories}) do
    %{data: render_many(categories, CategoryView, "category.json")}
  end

  def render("show.json", %{category: category}) do
    %{data: render_one(category, CategoryView, "category.json")}
  end


  def render("category.json", %{category: category}) do
    %{id: category.id,
      name: category.name,
      image: category.image,
      description: category.description,
      color: category.color,
      link: category.link
    }
  end

end
