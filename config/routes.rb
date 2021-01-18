Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  scope '/(:locale)', locale: /#{I18n.available_locales.join("|")}/ do
    root to: 'pages#index'
    resources :products, only: %i[index show]
    get :search, to: 'products#search'
    resources :categories
    resource :call_me, only: %i[create], controller: :call_mes
  end
  get '/admin/products/import', to: 'admin/products#import'
  post '/admin/products/import', to: 'admin/products#import_file'
  get :search, to: 'products#search'
  ActiveAdmin.routes(self)
end
