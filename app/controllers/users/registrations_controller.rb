class Users::RegistrationsController < Devise::RegistrationsController
    include RackSessionsFix
    respond_to :json
    private
    rescue_from StandardError, with: :handle_generic_error
    rescue_from ActiveRecord::RecordNotUnique, with: :handle_duplicate_record

    def respond_with(resource, _opts = {})
        if request.method == "POST" && resource.persisted?
            render json: {
                status: {code: 200, message: "Signed up sucessfully."},
                data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
            }, status: :ok
        elsif request.method == "DELETE"
            render json: {
                status: { code: 200, message: "Account deleted successfully."}
            }, status: :ok
        else
            render json: {
                status: {code: 422, message: "User couldn't be created successfully. #{resource.errors.full_messages.to_sentence}"}
            }, status: :unprocessable_entity
        end
    end

    def handle_duplicate_record
        render json: {error: "User already exist."}, status: :unprocessable_entity
    end

    def handle_generic_error(exception)
        render json: { error: exception.message }, status: :unprocessable_entity
    end
end