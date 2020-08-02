defmodule MinatSilvesterMain.AccountsTest do
  use MinatSilvesterMain.DataCase

  alias MinatSilvesterMain.Accounts

  describe "users" do
    alias MinatSilvesterMain.Accounts.User

    @valid_attrs %{password: "some password", username: "some username"}
    @update_attrs %{password: "some updated password", username: "some updated username"}
    @invalid_attrs %{password: nil, username: nil}

    def user_fixture(attrs \\ %{}) do
      {:ok, user} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Accounts.create_user()

      user
    end

    test "list_users/0 returns all users" do
      user = user_fixture()
      assert Accounts.list_users() == [user]
    end

    test "get_user!/1 returns the user with given id" do
      user = user_fixture()
      assert Accounts.get_user!(user.id) == user
    end

    test "create_user/1 with valid data creates a user" do
      assert {:ok, %User{} = user} = Accounts.create_user(@valid_attrs)
      assert user.password == "some password"
      assert user.username == "some username"
    end

    test "create_user/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Accounts.create_user(@invalid_attrs)
    end

    test "update_user/2 with valid data updates the user" do
      user = user_fixture()
      assert {:ok, %User{} = user} = Accounts.update_user(user, @update_attrs)
      assert user.password == "some updated password"
      assert user.username == "some updated username"
    end

    test "update_user/2 with invalid data returns error changeset" do
      user = user_fixture()
      assert {:error, %Ecto.Changeset{}} = Accounts.update_user(user, @invalid_attrs)
      assert user == Accounts.get_user!(user.id)
    end

    test "delete_user/1 deletes the user" do
      user = user_fixture()
      assert {:ok, %User{}} = Accounts.delete_user(user)
      assert_raise Ecto.NoResultsError, fn -> Accounts.get_user!(user.id) end
    end

    test "change_user/1 returns a user changeset" do
      user = user_fixture()
      assert %Ecto.Changeset{} = Accounts.change_user(user)
    end
  end

  describe "blogs" do
    alias MinatSilvesterMain.Accounts.Blog

    @valid_attrs %{description: "some description", link: "some link", title: "some title"}
    @update_attrs %{description: "some updated description", link: "some updated link", title: "some updated title"}
    @invalid_attrs %{description: nil, link: nil, title: nil}

    def blog_fixture(attrs \\ %{}) do
      {:ok, blog} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Accounts.create_blog()

      blog
    end

    test "list_blogs/0 returns all blogs" do
      blog = blog_fixture()
      assert Accounts.list_blogs() == [blog]
    end

    test "get_blog!/1 returns the blog with given id" do
      blog = blog_fixture()
      assert Accounts.get_blog!(blog.id) == blog
    end

    test "create_blog/1 with valid data creates a blog" do
      assert {:ok, %Blog{} = blog} = Accounts.create_blog(@valid_attrs)
      assert blog.description == "some description"
      assert blog.link == "some link"
      assert blog.title == "some title"
    end

    test "create_blog/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Accounts.create_blog(@invalid_attrs)
    end

    test "update_blog/2 with valid data updates the blog" do
      blog = blog_fixture()
      assert {:ok, %Blog{} = blog} = Accounts.update_blog(blog, @update_attrs)
      assert blog.description == "some updated description"
      assert blog.link == "some updated link"
      assert blog.title == "some updated title"
    end

    test "update_blog/2 with invalid data returns error changeset" do
      blog = blog_fixture()
      assert {:error, %Ecto.Changeset{}} = Accounts.update_blog(blog, @invalid_attrs)
      assert blog == Accounts.get_blog!(blog.id)
    end

    test "delete_blog/1 deletes the blog" do
      blog = blog_fixture()
      assert {:ok, %Blog{}} = Accounts.delete_blog(blog)
      assert_raise Ecto.NoResultsError, fn -> Accounts.get_blog!(blog.id) end
    end

    test "change_blog/1 returns a blog changeset" do
      blog = blog_fixture()
      assert %Ecto.Changeset{} = Accounts.change_blog(blog)
    end
  end

  describe "messages" do
    alias MinatSilvesterMain.Accounts.Message

    @valid_attrs %{from: "some from", messages: "some messages", name: "some name", subject: "some subject", text_body: "some text_body"}
    @update_attrs %{from: "some updated from", messages: "some updated messages", name: "some updated name", subject: "some updated subject", text_body: "some updated text_body"}
    @invalid_attrs %{from: nil, messages: nil, name: nil, subject: nil, text_body: nil}

    def message_fixture(attrs \\ %{}) do
      {:ok, message} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Accounts.create_message()

      message
    end

    test "list_messages/0 returns all messages" do
      message = message_fixture()
      assert Accounts.list_messages() == [message]
    end

    test "get_message!/1 returns the message with given id" do
      message = message_fixture()
      assert Accounts.get_message!(message.id) == message
    end

    test "create_message/1 with valid data creates a message" do
      assert {:ok, %Message{} = message} = Accounts.create_message(@valid_attrs)
      assert message.from == "some from"
      assert message.messages == "some messages"
      assert message.name == "some name"
      assert message.subject == "some subject"
      assert message.text_body == "some text_body"
    end

    test "create_message/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Accounts.create_message(@invalid_attrs)
    end

    test "update_message/2 with valid data updates the message" do
      message = message_fixture()
      assert {:ok, %Message{} = message} = Accounts.update_message(message, @update_attrs)
      assert message.from == "some updated from"
      assert message.messages == "some updated messages"
      assert message.name == "some updated name"
      assert message.subject == "some updated subject"
      assert message.text_body == "some updated text_body"
    end

    test "update_message/2 with invalid data returns error changeset" do
      message = message_fixture()
      assert {:error, %Ecto.Changeset{}} = Accounts.update_message(message, @invalid_attrs)
      assert message == Accounts.get_message!(message.id)
    end

    test "delete_message/1 deletes the message" do
      message = message_fixture()
      assert {:ok, %Message{}} = Accounts.delete_message(message)
      assert_raise Ecto.NoResultsError, fn -> Accounts.get_message!(message.id) end
    end

    test "change_message/1 returns a message changeset" do
      message = message_fixture()
      assert %Ecto.Changeset{} = Accounts.change_message(message)
    end
  end
end
