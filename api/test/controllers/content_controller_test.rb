require 'test_helper'

class ContentControllerTest < ActionDispatch::IntegrationTest
  setup do
    @content = content(:one)
  end

  test "should get index" do
    get content_url, as: :json
    assert_response :success
  end


  test "should show content" do
    get content_url(@content), as: :json
    assert_response :success
  end


end
