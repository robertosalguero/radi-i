class Collection < ApplicationRecord
    has_many :content, dependent :destroy
    has_many :placements, dependent :destroy
end
