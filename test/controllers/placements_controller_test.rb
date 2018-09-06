require 'test_helper'

class PlacementsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @placement = placements(:one)
  end

  test "should get index" do
    get placements_url, as: :json
    assert_response :success
  end

  test "should show placement" do
    get placement_url(@placement), as: :json
    assert_response :success
  end

end
