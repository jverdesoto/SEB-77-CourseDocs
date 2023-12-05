const data = [
	{
		body: "Fugit itaque ipsam perferendis sequi harum.",
		category: "Unknown generator",
		cover: "https://picsum.photos/seed/2327/1920/1080",
		createdAt: "2015-05-18T20:48:08Z",
		id: 1,
		isDraft: false,
		title: "dolorum",
		views: 223,
        authorAvatar: "https://i.pravatar.cc/200?img=1",
        authorName: "Emily Smith"
	},
	{
		body: "Eos culpa et voluptatem.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/0316/1920/1080",
		createdAt: "2018-08-15T19:55:08Z",
		id: 2,
		isDraft: false,
		title: "perspiciatis rerum",
		views: 403,
        authorAvatar: "https://i.pravatar.cc/200?img=3",
        authorName: "Benjamin Johnson"
	},
	{
		body: "Illo saepe consequuntur a libero deserunt a eos, perferendis sint, accusantium qui dolorum sed at.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/4326/1920/1080",
		createdAt: "2016-06-12T00:16:07Z",
		id: 3,
		isDraft: false,
		title: "molestiae odio nisi",
		views: 994,
        authorAvatar: "https://i.pravatar.cc/200?img=5",
        authorName: "Emily Smith"
	},
	{
		body: "Unde veniam.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/4729/1920/1080",
		createdAt: "2010-06-19T16:41:51Z",
		id: 4,
		isDraft: false,
		title: "cumque est",
		views: 178,
        authorAvatar: "https://i.pravatar.cc/200?img=6",
        authorName: "Benjamin Johnson"
	},
	{
		body: "Debitis et neque facilis magnam.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/8392/1920/1080",
		createdAt: "2016-04-19T19:44:19Z",
		id: 5,
		isDraft: false,
		title: "ad impedit sunt",
		views: 733,
        authorAvatar: "https://i.pravatar.cc/200?img=7",
        authorName: "Emily Smith"
	},
	{
		body: "Error nisi deserunt consectetur ea a.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/9839/1920/1080",
		createdAt: "2012-11-14T20:24:23Z",
		id: 6,
		isDraft: false,
		title: "molestias",
		views: 151,
        authorAvatar: "https://i.pravatar.cc/200?img=8",
        authorName: "Benjamin Johnson"
	},
	{
		body: "Mollitia doloribus a reprehenderit vitae, incidunt incidunt.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/2230/1920/1080",
		createdAt: "2015-10-05T17:56:52Z",
		id: 7,
		isDraft: false,
		title: "dolore",
		views: 129,
        authorAvatar: "https://i.pravatar.cc/200?img=39",
        authorName: "Sarah Davis"
	},
	{
		body: "Reprehenderit et, asperiores sed reprehenderit nisi, architecto a reprehenderit ipsa.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/9417/1920/1080",
		createdAt: "2012-01-16T01:37:42Z",
		id: 8,
		isDraft: false,
		title: "labore quae nostrum",
		views: 757,
        authorAvatar: "https://i.pravatar.cc/200?img=48",
        authorName: "Sarah Davis"
	},
	{
		body: "Perspiciatis minima sit.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/8842/1920/1080",
		createdAt: "2013-06-23T14:40:58Z",
		id: 9,
		isDraft: false,
		title: "inventore",
		views: 448,
        authorAvatar: "https://i.pravatar.cc/200?img=55",
        authorName: "Emily Smith"
	},
	{
		body: "Dolore perferendis deleniti ab, in molestiae quia, autem perspiciatis aliquam corrupti.",
		category: "unknown generator",
		cover: "https://picsum.photos/seed/5668/1920/1080",
		createdAt: "2017-09-25T10:48:38Z",
		id: 10,
		isDraft: false,
		title: "a vel laborum non a",
		views: 719,
        authorAvatar: "https://i.pravatar.cc/200?img=69",
        authorName: "Sarah Davis"
	}
]

// Task

function createCard(cardData) {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');

    const cardInner = document.createElement('div');
    cardInner.classList.add('card');

    const cardImage = document.createElement('img');
    cardImage.src = cardData.cover;
    cardImage.alt = 'Card Image';
    cardImage.classList.add('card-img-top');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = cardData.title;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = cardData.body;

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');

    const cardViews = document.createElement('small');
    cardViews.classList.add('text-muted');
    cardViews.textContent = `Views: ${cardData.views}`;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardFooter.appendChild(cardViews);
    cardInner.appendChild(cardImage);
    cardInner.appendChild(cardBody);
    cardInner.appendChild(cardFooter);

    card.appendChild(cardInner);
    return card;
  }
  function renderCards(data) {
    const cardContainer = document.getElementById('cardContainer');

    data.forEach(cardData => {
      const card = createCard(cardData);
      cardContainer.appendChild(card);
    });
}
  renderCards(data);


// data [0]
// Javi's answer

// data.map(post =>  {
// let cardTitle = document.createElement("h5");
// cardTitle.classList.add("card-title");
// cardTitle.innerHTML = post.title

// let cardText = document.createElement("p");
// cardText.classList.ass("card-text");
// cardText.innerHTML = post.body

// let btn = document.createElement("A");
// btn.classList.add("btn", "btn-primary");
// btn.setAttribute("href", "#");
// btn.text = "Read More >>"

// let cardBody = document.createElement("div");
// cardBody.classList.add("card-body");

// cardBody.appendChild(cardTitle);
// cardBody.appendChild(cardText);
// cardBody.appendChild(btn);

// let image = document.createElement("img");
// image.classList.add("card-img-top");
// image.setAttribute("src", post.cover);
// image.setAttribute("alt", post.title);

// let card = document.createElement("div");
// card.classList.add("card");

// card.appendChild(image);
// card.appendChild(cardBody);

// let col = document.createElement("div");
// col.classList.add("col-lg-4", "col-md-6", "col-sm-12");

// col.appendChild(card);

// document.getElementById("content").appendChild(col);

// })