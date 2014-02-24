class Movie
  include Mongoid::Document

  field :title, type: String
  field :year, type: Integer

end