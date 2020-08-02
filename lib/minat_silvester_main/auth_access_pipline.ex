defmodule MinatSilvesterMain.AuthAccessPipeline do
 use Guardian.Plug.Pipeline, otp_app: :minat_silvester_main

 plug Guardian.Plug.VerifyHeader
 plug Guardian.Plug.VerifySession
 plug Guardian.Plug.EnsureAuthenticated
 plug Guardian.Plug.LoadResource, allow_blank: true
end
