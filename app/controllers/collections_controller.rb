class CollectionsController < ApplicationController
  ## before_action :set_collection, only: [:show]


  # GET /collections/1
  def show
    debugger
    p request.location
    render json: @collection
  end
 

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_collection
      @collection = Collection.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def collection_params
      params.require(:collection).permit(:name, :info, :img, :year, :artist)
    end
end
