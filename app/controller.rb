require 'sinatra/base'

class ThermoApp < Sinatra::Base

use Rack::Session::Cookie, key: 'rack.session', expire_after: 3600

set :views, proc { File.join(root, 'views') }

get '/' do
  if session[:temp]
    @temperature = session[:temp]
  else
    @temperature = 20
  end
  erb :'thermostat'
end

post '/' do
  session[:temp] = params[:sessiontemp]
  erb :'thermostat'
end





run! if app_file = $0
end