require 'test_helper'

class LocalesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @locale = locales(:one)
  end

  test "should get index" do
    get locales_url, as: :json
    assert_response :success
  end

  test "should show locale" do
    get locale_url(@locale), as: :json
    assert_response :success
  end

end
