import {RoastModel} from 'roast';

export enum CupStatus {

	Ready    = 0,
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

		this.createdTime = new Date();
		this.startTime = new Date().toISOString();
		this.status = CupStatus.Ready;
		this.roast = new RoastModel();

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