# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :minat_silvester_main,
  ecto_repos: [MinatSilvesterMain.Repo]

# Configures the endpoint
config :minat_silvester_main, MinatSilvesterMainWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "L44633SedaIhI2LsaT+WUIgp0OTfhcikKhDB3YhWoBTdGu8y5YTSIt7J9pXrCnPW",
  render_errors: [view: MinatSilvesterMainWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: MinatSilvesterMain.PubSub,
  live_view: [signing_salt: "db1tzNGY"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]


config :minat_silvester_main, MinatSilvesterMain.Guardian,
issuer: "minat_silvester_main",
secret_key: "xy3Nbo5SCN5OL6qbPlF3OvlrHt1o3SA3L2mt+CdHpJ+FKBDw0Ybjq9rKvG5zRES2"

config :minat_silvester_main, MinatSilvesterMain.AuthAccessPipeline,
        module: MinatSilvesterMain.Guardian,
        error_handler: MinatSilvesterMain.AuthErrorHandler

config :minat_silvester_main, MyApp.Mailer,
adapter: Bamboo.MandrillAdapter,
api_key: "xy3Nbo5SCN5OL6qbPlF3OvlrHt1o3SA3L2mt+CdHpJ+FKBDw0Ybjq9rKvG5zRES2"


# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
