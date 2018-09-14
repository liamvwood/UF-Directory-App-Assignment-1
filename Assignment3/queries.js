/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'), 
  Listing = require('./ListingSchema'),
  config = require('./config.js');

  /* Connect to your database */
mongoose.connect(config.db.uri,config.db.options);


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
    Listing.find({ code:"LBW" }, function(err, listing) {
      if (err) throw err;
      // object of the user
      console.log(listing);
    });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({ code:"CABL" }, function(err, listing) {
    if (err) throw err;
    // log listing
    console.log(listing);
  });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate({code:'PHL'}, {address: '1953 Museum Rd, Gainesville, FL 32603'}, function(err, listing) {
    if (err) throw err;
  });

  Listing.find({code:'PHL'}, function(err, listing) {
    if (err) throw err;

    // log listing
    console.log(listing);
  });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({},function(err,listing){
    if (err) throw err;
    console.log(listing);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
// retrieveAllListings();
