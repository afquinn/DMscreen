Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'pcs#index'
  devise_for :users#, :controllers => { :registrations => 'users' }

  get '/pcs', to: 'pcs#index'
  get '/pcs/:id', to: 'pcs#index'
  get '/campaign/:id/dungeons/:id/rooms/:id', to: 'rooms#index'
  get '/campaign/:id/dungeons/:id/rooms/:id', to: 'rooms#show'
  get '/campaign/:id/dungeons/:id/', to: 'dungeons#show'




  namespace :api do
    namespace :v1 do
      resources :campaigns, only: [:index, :show]do
        resources :dungeons, only: [:index, :show] do
          resources :rooms, only: [:index, :show]
        end
      end
      resources :users, only: [:index, :update]
      resources :pcs, only: [:index, :show, :create]
    end
  end

  resources :campaigns, only: [:index, :show] do
    resources :dungeons, only: [:index, :show] do
      resources :rooms, only: [:index, :show]
    end
  end

  resources :campaigns, only: [:index, :show] do
    resources :dungeons, only: [:index, :show]
  end

end
