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

  if session[:city]
    @city = session[:city]
  else
     @city = 'London'
  end

  erb :'thermostat'
end

post '/' do
  if params[:sessiontemp]
  session[:temp] = params[:sessiontemp]
end
if params[:city]
  session[:city] = params[:city]
end
  erb :'thermostat'
end





run! if app_file = $0
end