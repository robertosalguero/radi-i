class PlacementsController < ApplicationController
  before_action :authenticate_user
  before_action :set_placement, only: [:show, :update, :destroy]

  # GET /placements
  def index
    @placements = Placement.all

    render json: @placements
  end

  # GET /placements/1
  def show
    render json: @placement
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_placement
      @placement = Placement.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def placement_params
      params.require(:placement).permit(:locale_id, :collection_id, :title, :msg, :radius)
    end
end
