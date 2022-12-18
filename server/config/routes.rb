Rails.application.routes.draw do
  resources :dishes
  resources :restaurants
  resources :users
  resources :posts
  
  post '/sessions', to: 'sessions#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
