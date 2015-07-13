# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
#

# json.(@board, :title)
# json.lists do
#   json.array! @board.lists do |list|
#     json.extract! list, :title
#     json.array! list.cards do |card|
#       json.extract! card, :title, :description
#     end
#   end
# end

json.(@board, :title, :id)
json.partial! 'api/lists/lists', lists: @board.lists


# json.lists(@board.lists) do |list|
#   json.(list, :title)
#   json.cards(list.cards) do |card|
#     json.(card, :title, :description)
#   end
# end



# json.(@board, :title)
# json.lists(@board.lists) do |list|
#   json.extract! list, :title
#   json.cards(list.cards) do |card|
#     json.extract! card, :title, :description
#   end
# end


# json.(@board, :title)
# json.lists(@board.lists) do |list|
#   json.(list, :title)
#   json.cards(list.cards) do |card|
#     json.(card, :title, :description)
#   end
# end
