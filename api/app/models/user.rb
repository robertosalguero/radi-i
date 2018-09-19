class User < ApplicationRecord
    has_secure_password


    def self.from_token_request request
        username = request.params["auth"] && request.params["auth"]["username"]
        self.find_by username: username
      end

      def to_token_payload
        user = User.find_by username: username
        { username: user.username, id: user.id }
      end

    
end
 