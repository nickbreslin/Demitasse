export class CupModel {
	
	// Properties
	/*
		size (oz)
		size (category)
		
		roast

		created

		start
		finished

		rating
	*/

	private rating;

	private createdTime;
	public startTime;
	private endTime;

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



	// Write / Save


	// Read / Load

}