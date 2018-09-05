require 'test_helper'

class PlacementsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @placement = placements(:one)
  end

  test "should get index" do
    get placements_url, as: :json
    assert_response :success
  end

  test "should create placement" do
    assert_difference('Placement.count') do
      post placements_url, params: { placement: { collection_id: @placement.collection_id, locale_id: @placement.locale_id, msg: @placement.msg, radius: @placement.radius, title: @placement.title } }, as: :json
    end

    assert_response 201
  end

  test "should show placement" do
    get placement_url(@placement), as: :json
    assert_response :success
  end

  test "should update placement" do
    patch placement_url(@placement), params: { placement: { collection_id: @placement.collection_id, locale_id: @placement.locale_id, msg: @placement.msg, radius: @placement.radius, title: @placement.title } }, as: :json
    assert_response 200
  end

  test "should destroy placement" do
    assert_difference('Placement.count', -1) do
      delete placement_url(@placement), as: :json
    end

    assert_response 204
  end
end
