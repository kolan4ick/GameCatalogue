Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  scope '/(:locale)', locale: /#{I18n.available_locales.join("|")}/ do
    root to: 'pages#index'
    resources :products, only: %i[index show]
    get :search, to: 'products#search'
    resources :categories
  end
end
