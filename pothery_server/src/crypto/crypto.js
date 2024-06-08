const bcrypt = require("bcrypt")

var matches;

module.exports = {
  	hash_password(password) {
    	return bcrypt.hash(password, 10);
	},

	hash_password_given_matches(password, hash) {
		bcrypt.compare(password, hash, function(err, result) {
			// Something is very wrong if err is thrown
			if (err) { throw err; }

			matches = result;
    	});		
		return matches;
	}
};
