json.cards(cards) do |card|
  json.(card, :id, :title, :description)
end
