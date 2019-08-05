import '@/style/index';
class HackCanvas {
	fontSize: number;
	list: number[];
	ctx: CanvasRenderingContext2D;
	width: number;
	height: number;
	timer: any;
	canvas: HTMLCanvasElement;

	constructor(id: string) {
		// @ts-ignore
		this.canvas = document.getElementById(id);
		// @ts-ignore
		this.ctx = this.canvas.getContext('2d');
		this.fontSize = 16;
		this.list = [];
		this.timer = 0;
		this.width = 0;
		this.height = 0;
	}
	setWidthAndHeight() {
		let W = document.documentElement.clientWidth,
			H = document.documentElement.clientHeight;
		this.canvas.width = this.width = W;
		this.canvas.height = this.height = H;
	}
	draw() {
		this.ctx.fillStyle = 'rgba(0,0,0,0.05)';
		this.ctx.fillRect(0, 0, this.width, this.height);
		this.ctx.fillStyle = '#00ff00';
		this.ctx.font = this.fontSize + 'px arial';
		let columns = Math.ceil(this.width / this.fontSize);
		for (let i = 0; i < columns; i++) {
			let n: string = Math.floor(Math.random() * 10).toString();
			this.ctx.fillText(
				n,
				i * this.fontSize,
				this.list[i] * this.fontSize
			);
			if (
				this.list[i] * this.fontSize > this.height ||
				Math.random() > 0.88
			) {
				this.list[i] = 0;
			}
			this.list[i]++;
		}
	}
	init() {
		this.setWidthAndHeight();
		this.timer = setInterval(this.draw.bind(this), 66);
	}
	resize() {
		clearInterval(this.timer);
		this.setWidthAndHeight();
		this.list = [];
		this.init();
	}
}

let app = new HackCanvas('canvas');

window.onload = () => {
	app.init();
};
window.onresize = () => {
	app.resize();
};
