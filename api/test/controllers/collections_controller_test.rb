require 'test_helper'

class CollectionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @collection = collections(:one)
  end

  test "should get index" do
    get collections_url, as: :json
    assert_response :success
  end

  test "should show collection" do
    get collection_url(@collection), as: :json
    assert_response :success
  end

end
