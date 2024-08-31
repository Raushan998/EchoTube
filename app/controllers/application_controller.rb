class ApplicationController < ActionController::Base
  include AuthenticationConcern
  protect_from_forgery with: :null_session
  before_action :configure_permitted_parameters, if: :devise_controller?
  
  protected
  
  def configure_permitted_parameters
    Rails.logger.info "Permitted parameters: #{params.inspect}"
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :password_confirmation])
  end
end
  