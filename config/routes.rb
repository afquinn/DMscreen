Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :campaigns, only: [:index, :show]
  resources :dungeons, only: [:show] do
    resources :rooms, only: [:show]
  end
  resources :rooms, only: [:show]
end
