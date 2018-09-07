Rails.application.routes.draw do
  scope '/api' do
    resources :content
    resources :placements
    resources :locales
    resources :users
    post 'user_token' => 'user_token#create'
  end

  resources :collections

end
