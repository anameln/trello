json.lists(lists) do |list|
  json.(list, :title, :id)
  json.partial! 'api/cards/cards', cards: list.cards
end

# json.lists(@board.lists) do |list|
#   json.(list, :title)
#   json.cards(list.cards) do |card|
#     json.(card, :title, :description)
#   end
# end
