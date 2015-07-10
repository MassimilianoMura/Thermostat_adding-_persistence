require 'sinatra/base'

class ThermoApp < Sinatra::Base

  get '/' do
    File.read(file.join('public', 'thermostat.html'))
  end


run! if app_file = $0
end