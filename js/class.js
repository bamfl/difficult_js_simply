// Урок 7. JavaScript. Все о ES6 Классах (+ Практическое Применение)
class Product {
	static type = 'PRODUCT'; // это св-во можно получть только через Product.type, обратившись к самому классу, а не к экземпляру

	constructor({name, imgSrc, price, text}) {
		this.name = name;
		this.imgSrc = imgSrc;
		this.price = price;
		this.text = text;
	}

	render() {
		const product = document.createElement('div');
		product.classList.add('product');
		product.innerHTML = 
			`<div class="product__title">${this.name}</div>
				<div class="product__img">
					<img src="${this.imgSrc}" alt="">
				</div>
				<div class="product__text">${this.text}</div>
				<div class="product__price">${this.price}</div>
			`;
		document.body.prepend(product);
	}
}

const ballObj = {
	imgSrc: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/0cc/1000_1000_8dd6/33372070299.jpg', 
	text: 'Профессианальный футбольный мяч',
	price: 1100, 
	name: 'Мяч', 
};

const ball = new Product(ballObj);
ball.render();

console.log(ball);


// Расширить класс
class SaleProduct extends Product {
	constructor({name, imgSrc, price, text, sale}) {
		super({name, imgSrc, price, text});
		this._sale = sale;
	}

	get sale() {
		return this._sale;
	}

	set sale(isSale) {
		this._sale = isSale;
	}
}

const saleBallObj = {
	imgSrc: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/0cc/1000_1000_8dd6/33372070299.jpg', 
	text: 'Распродажный футбольный мяч',
	price: 500, 
	name: 'Мяч', 
	sale: true
};

const saleBall = new SaleProduct(saleBallObj);
saleBall.render();
console.log(saleBall.sale); // getter
saleBall.sale = false; // setter
console.log(saleBall);


class Component {
	constructor(selector) {
		this.$el = this.create(selector);
	}

	hide() {
		this.$el.style.display = 'none';
	}

	show() {
		this.$el.style.display = 'block';
	}

	create(selector) {
		const el = document.createElement('div');

		if (selector.startsWith('.')) {
			el.classList.add(selector.slice(1));
		} else {
			el.id = selector.slice(1);
		}

		document.body.append(el);

		return el;
	}
}


class Box extends Component {
	constructor({selector, size, color}) {
		super(selector);

		this.$el.style.width = size + 'px';
		this.$el.style.height = size + 'px';
		this.$el.style.background = color;
	}
}

const box1 = new Box({
	selector: '.box',
	size: 100,
	color: 'red'
});


class Circle extends Box {
	constructor({selector, size, color}) {
		super({selector, size, color});

		this.$el.style.borderRadius = '50%';
	}
}

const circle1 = new Circle({
	selector: '.box',
	size: 150,
	color: 'green'
});
