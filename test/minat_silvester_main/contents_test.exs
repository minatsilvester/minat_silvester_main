defmodule MinatSilvesterMain.ContentsTest do
  use MinatSilvesterMain.DataCase

  alias MinatSilvesterMain.Contents

  describe "categories" do
    alias MinatSilvesterMain.Contents.Category

    @valid_attrs %{image: "some image", name: "some name"}
    @update_attrs %{image: "some updated image", name: "some updated name"}
    @invalid_attrs %{image: nil, name: nil}

    def category_fixture(attrs \\ %{}) do
      {:ok, category} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Contents.create_category()

      category
    end

    test "list_categories/0 returns all categories" do
      category = category_fixture()
      assert Contents.list_categories() == [category]
    end

    test "get_category!/1 returns the category with given id" do
      category = category_fixture()
      assert Contents.get_category!(category.id) == category
    end

    test "create_category/1 with valid data creates a category" do
      assert {:ok, %Category{} = category} = Contents.create_category(@valid_attrs)
      assert category.image == "some image"
      assert category.name == "some name"
    end

    test "create_category/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Contents.create_category(@invalid_attrs)
    end

    test "update_category/2 with valid data updates the category" do
      category = category_fixture()
      assert {:ok, %Category{} = category} = Contents.update_category(category, @update_attrs)
      assert category.image == "some updated image"
      assert category.name == "some updated name"
    end

    test "update_category/2 with invalid data returns error changeset" do
      category = category_fixture()
      assert {:error, %Ecto.Changeset{}} = Contents.update_category(category, @invalid_attrs)
      assert category == Contents.get_category!(category.id)
    end

    test "delete_category/1 deletes the category" do
      category = category_fixture()
      assert {:ok, %Category{}} = Contents.delete_category(category)
      assert_raise Ecto.NoResultsError, fn -> Contents.get_category!(category.id) end
    end

    test "change_category/1 returns a category changeset" do
      category = category_fixture()
      assert %Ecto.Changeset{} = Contents.change_category(category)
    end
  end

  describe "video" do
    alias MinatSilvesterMain.Contents.Video

    @valid_attrs %{description: "some description", link: "some link", title: "some title"}
    @update_attrs %{description: "some updated description", link: "some updated link", title: "some updated title"}
    @invalid_attrs %{description: nil, link: nil, title: nil}

    def video_fixture(attrs \\ %{}) do
      {:ok, video} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Contents.create_video()

      video
    end

    test "list_video/0 returns all video" do
      video = video_fixture()
      assert Contents.list_video() == [video]
    end

    test "get_video!/1 returns the video with given id" do
      video = video_fixture()
      assert Contents.get_video!(video.id) == video
    end

    test "create_video/1 with valid data creates a video" do
      assert {:ok, %Video{} = video} = Contents.create_video(@valid_attrs)
      assert video.description == "some description"
      assert video.link == "some link"
      assert video.title == "some title"
    end

    test "create_video/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Contents.create_video(@invalid_attrs)
    end

    test "update_video/2 with valid data updates the video" do
      video = video_fixture()
      assert {:ok, %Video{} = video} = Contents.update_video(video, @update_attrs)
      assert video.description == "some updated description"
      assert video.link == "some updated link"
      assert video.title == "some updated title"
    end

    test "update_video/2 with invalid data returns error changeset" do
      video = video_fixture()
      assert {:error, %Ecto.Changeset{}} = Contents.update_video(video, @invalid_attrs)
      assert video == Contents.get_video!(video.id)
    end

    test "delete_video/1 deletes the video" do
      video = video_fixture()
      assert {:ok, %Video{}} = Contents.delete_video(video)
      assert_raise Ecto.NoResultsError, fn -> Contents.get_video!(video.id) end
    end

    test "change_video/1 returns a video changeset" do
      video = video_fixture()
      assert %Ecto.Changeset{} = Contents.change_video(video)
    end
  end
end
