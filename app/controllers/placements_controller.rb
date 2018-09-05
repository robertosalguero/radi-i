class PlacementsController < ApplicationController
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

  # POST /placements
  def create
    @placement = Placement.new(placement_params)

    if @placement.save
      render json: @placement, status: :created, location: @placement
    else
      render json: @placement.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /placements/1
  def update
    if @placement.update(placement_params)
      render json: @placement
    else
      render json: @placement.errors, status: :unprocessable_entity
    end
  end

  # DELETE /placements/1
  def destroy
    @placement.destroy
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
