export class CupModel {
	
	// Properties

	public createdTime;
	public startTime;
	public endTime;

	public size;
	public roast;
	public rating;


	constructor() {
		console.log('created cup');
		this.createdTime = new Date();
		this.startTime = this.createdTime.getHours() + ":" + this.createdTime.getMinutes()
	}

	setStartTime(time) {
		this.startTime = time;
	}

	setRating(rating) {
		this.rating = rating;
	}
}