class LocalesController < ApplicationController
  before_action :authenticate_user
  before_action :set_locale, only: [:show, :update, :destroy]

  # GET /locales
  def index
    @locales = Locale.all

    render json: @locales
  end

  # GET /locales/1
  def show
    render json: @locale
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_locale
      @locale = Locale.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def locale_params
      params.require(:locale).permit(:name, :coord)
    end
end
