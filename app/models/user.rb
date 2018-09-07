class User < ApplicationRecord
    attr_accessible :latitude, :longitude
    has_secure_password


    def self.from_token_request request
        username = request.params["auth"] && request.params["auth"]["username"]
        self.find_by username: username
      end

    geocoded_by :ip_address,
    :latitude => :lat, :longitude => :lon
    after_validation :geocode

    
end
 