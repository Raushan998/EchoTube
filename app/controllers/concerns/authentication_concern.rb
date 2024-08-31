module AuthenticationConcern
    extend ActiveSupport::Concern

    def authenticate_user!
        unless current_user
           render json: { error: "User not authenticated!"}, status: :unauthorized
        end
    end
end