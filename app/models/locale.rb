class Locale < ApplicationRecord
    has_many :placements, dependent: :destroy
end
