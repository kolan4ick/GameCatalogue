Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root to: 'pages#index'
  resources :products, only: %i[index show]
  get :search, to: 'products#search'
  resources :categories
end
