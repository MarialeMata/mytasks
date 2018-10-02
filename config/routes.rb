Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'

  # get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end
  
  scope module: :v1, constraints: ApiVersion.new('v1', true) do

    get '/get_user', to: 'user#get_user'
    get '/priorities', to: 'tasks#priorities'
    get '/statuses', to: 'tasks#statuses'
    post '/signup', to: 'user#signup'

    resources :projects do
      resources :tasks, shallow: true, only: [:create] do
        resources :comments, except: [:index, :show, :update]
      end
    end

    resources :tasks

  end

end
