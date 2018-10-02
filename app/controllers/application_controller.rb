class ApplicationController < ActionController::API
  include Knock::Authenticable
  include Response
  include ExceptionHandler

  def fallback_index_html
    render :file => 'client/public/index.html'
  end
end
