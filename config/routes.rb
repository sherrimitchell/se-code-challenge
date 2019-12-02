Rails.application.routes.draw do
  # resources :comics
  root to: 'comics#index'
  
  get 'latest', to: 'comics#latest'
  get 'search', to: 'comics#search'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
