Movies::Application.routes.draw do
  root 'home#index'
  get 'api/oscarlist' => 'home#list'
end
