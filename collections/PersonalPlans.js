PersonalPlans = new Mongo.Collection('PersonalPlans');

// PersonalPlans.allow({
// 	insert: function(userId, doc) {
// 		return !!userId;
// 	},
// 	update: function(userId, doc) {
// 		return !!userId;
// 	}
// });


// PersonalPlansSchema = new SimpleSchema({
// 	name: {
// 		type: String,
// 		label: "Name"
// 	},
// 	desc: {
// 		type: String,
// 		label: "Description"
//     },
//     // amount: {
// 	// 	type: "Double",
// 	// 	label: "Amount"
// 	// },
// 	// inMenu: {
// 	// 	type: Boolean,
// 	// 	defaultValue: false,
// 	// 	optional: true,
// 	// 	autoform: {
// 	// 		type: "hidden"
// 	// 	}
// 	// },
// 	// author: {
// 	// 	type: String,
// 	// 	label: "Author",
// 	// 	autoValue: function () {
// 	// 		return this.userId
// 	// 	},
// 	// 	autoform: {
// 	// 		type: "hidden"
// 	// 	}
// 	// },
// 	// createdAt: {
// 	// 	type: Date,
// 	// 	label: "Created At",
// 	// 	autoValue: function() {
// 	// 		return new Date()
// 	// 	},
// 	// 	autoform: {
// 	// 		type: "hidden"
// 	// 	}
// 	// }
// });

// PersonalPlans.attachSchema(PersonalPlansSchema);