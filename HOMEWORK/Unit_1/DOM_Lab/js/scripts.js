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


function createCards(arr) {
	arr.map(article => {
		const col = document.createElement('div');
		col.classList.add('col-lg-4', 'col-md-6', 'col-sm-12')
		
		const card = document.createElement('div');
		card.classList.add('card')
		
		const cardImage = document.createElement('img');
		cardImage.classList.add('card-img-top');
		
		const cardBody = document.createElement('div');
		cardBody.classList.add('card-body');
		
		const cardTitle = document.createElement('h5');
		cardTitle.classList.add('card-title');
		
		const cardText = document.createElement('p');
		cardText.classList.add('card-text');
		
		const cardButton = document.createElement('a');
		cardButton.classList.add('btn', 'btn-primary')
		cardButton.innerText = 'Read More'
		cardImage.setAttribute('src', article.cover);
		cardTitle.innerText = article.title;
		cardText.innerText = article.body;
		cardBody.appendChild(cardTitle);
		cardBody.appendChild(cardText);
		cardBody.appendChild(cardButton);

		card.appendChild(cardImage);
		card.appendChild(cardBody);

		col.appendChild(card);

		document.querySelector('.row').appendChild(col);


	})
}

function createCardsV2(arr) {
	arr.map(article => {		
		const card = document.createElement('div');
		card.classList.add('col-lg-4', 'col-md-6', 'col-sm-12')

		card.innerHTML = `
		<div class="card">
			<img class="card-img-top" />
			<div class="card-author">
				<img class="card-author-image" />
				<h6 class="card-author-name"></h6>
			</div>
			<div class="card-body">
		  	<h5 class="card-title"></h5>
		  	<p class="card-text"></p>
		  	<p><span class="badge bg-secondary"></span></p>
		  	<a href="#" class="btn btn-primary">Read More</a>
			</div>
		</div>
		`
		
		const cardImage = card.querySelector('.card-img-top');
		const cardAuthorImage = card.querySelector('.card-author-image');
		const cardAuthorName = card.querySelector('.card-author-name');
		const cardTitle = card.querySelector('.card-title');
		const cardText = card.querySelector('.card-text');
		const cardView = card.querySelector('.badge');

		cardImage.setAttribute('src', article.cover);
		cardAuthorImage.setAttribute('src', article.authorAvatar);
		cardAuthorName.innerText = article.authorName;
		cardTitle.innerText = article.title;
		cardText.innerText = article.body;
		cardView.innerText = article.views + " views";

		document.querySelector('.row').appendChild(card);
	})
}

// Additionally this could be done using a template literal 
// such as below - didn't use this as wanted practice setting inner Text & attributes etc. manually
//`
// 		<div class="card">
// 			<img sr=${article.cover} class="card-img-top" />
// 			<div class="card-author">
// 				<img src=${article.authorAvatar} class="card-author-image" />
// 				<h6 class="card-author-name">${article.authorName}</h6>
// 			</div>
// 			<div class="card-body">
// 		  	<h5 class="card-title">${article.title}</h5>
// 		  	<p class="card-text">${article.body}</p>
// 		  	<p><span class="badge bg-secondary">${article.views} views</span></p>
// 		  	<a href="#" class="btn btn-primary">Read More</a>
// 			</div>
// 		</div>
// 		`

createCardsV2(data);
