const boardgames = [
    {cover: 'https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__itemrep/img/DR7181wU4sHT6gn6Q1XccpPxNHg=/fit-in/246x300/filters:strip_icc()/pic4458123.jpg',
    name: 'Wingspan',
    owned: true,
    link: 'https://boardgamegeek.com/boardgame/266192/wingspan',
    id: 0},

    {cover: 'https://cf.geekdo-images.com/7k_nOxpO9OGIjhLq2BUZdA__itemrep/img/RVh5N-_HcMziJ3M6Q1eLTlj8XIQ=/fit-in/246x300/filters:strip_icc()/pic3163924.jpg',
    name: 'Scythe',
    owned: true,
    link: 'https://boardgamegeek.com/boardgame/169786/scythe',
    id: 1},

    {cover: 'https://cf.geekdo-images.com/dT1vJbUizZFmJAphKg-byA__itemrep/img/pu4eSfZNzf3r7B-7pES03cfFROY=/fit-in/246x300/filters:strip_icc()/pic7720813.png',
    name: 'Apiary',
    owned: true,
    link: 'https://boardgamegeek.com/boardgame/400314/apiary',
    id: 2},

    {cover: 'https://cf.geekdo-images.com/9eBww9iAi472T2goijVqwQ__itemrep/img/U0GQCehAhCAtu5ELncTPPAVAUiM=/fit-in/246x300/filters:strip_icc()/pic7320023.jpg',
    name: 'Expeditions',
    owned: false,
    link: 'https://boardgamegeek.com/boardgame/379078/expeditions',
    id: 3}

    ,

    {cover: 'https://cf.geekdo-images.com/7kqDmkUMGxXHr1wNPA7Gvg__itemrep/img/I1vufBbdFIUTfH1tmcfbeusXI8s=/fit-in/246x300/filters:strip_icc()/pic4884996.jpg',
    name: 'Tapestry',
    owned: true,
    link: 'https://boardgamegeek.com/boardgame/286096/tapestry',
    id: 4}
]

module.exports = {
    getAll: function() {
        return boardgames
    },

    getOne: function(i) {
        return boardgames[i]
    }
}