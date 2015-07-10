require 'sinatra/base'

class ThermoApp < Sinatra::Base

set :views, proc { File.join(root, '..', 'views') }

get '/' do
  erb :'thermostat'

end





run! if app_file = $0
end