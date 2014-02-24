class HomeController < ApplicationController
  respond_to :json

  def index
    @movies = Movie.all
  end

  def list
    @movies = Movie.all
    respond_with(@movies)
  end

end