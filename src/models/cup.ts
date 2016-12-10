export enum CupStatus {

	Created  = 1,
	Started  = 2,
	Finished = 3
}

export enum CupSize {
	Tall   = 8,
	Grande = 12,
	Venti  = 16
}

export class CupModel {
	
	// Properties

	public createdTime;
	public startTime;
	public endTime;

	public size : CupSize;
	public roast;
	public rating;
	public status : CupStatus;


	constructor() {
		console.log('created cup');
		this.createdTime = new Date();
		this.startTime = new Date().toISOString();//this.createdTime.getHours() + ":" + this.createdTime.getMinutes()+"AM";
		console.log(this.createdTime);

		//this.status = CupSize.Tall;
	}

	setStartTime(time) {
		this.startTime = time;
	}

	setRating(rating) {
		this.rating = rating;
	}
}



/*
import * as Enums from './somedirectory/enums/enums';
...
constructor() 
{
    console.log(Enums.RoleType.Admin);
}
*/