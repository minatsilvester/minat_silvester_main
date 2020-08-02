defmodule MinatSilvesterMain.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      MinatSilvesterMain.Repo,
      # Start the Telemetry supervisor
      MinatSilvesterMainWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: MinatSilvesterMain.PubSub},
      # Start the Endpoint (http/https)
      MinatSilvesterMainWeb.Endpoint
      # Start a worker by calling: MinatSilvesterMain.Worker.start_link(arg)
      # {MinatSilvesterMain.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: MinatSilvesterMain.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    MinatSilvesterMainWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
