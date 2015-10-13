# KnowYourBros


<<< Technology Stack >>>

Gruntfile 
	// automatic
	// makes code efficient
	// good for development

DigitalOcean
	// good for cheap setup of nodes behind a nginx reverse proxy
	// should also consider setup of varnish behind nginx

MongoLab
	// more expensive but reliable MongoDb

S3 / Cloudfront
	// good CDN for static css, javascript, and assets (spritesheets / other images)
	// also good for user uploaded content


Express.js for easy REST API configuration ---> potentially move to simpler Node.js for more efficiency

Backbone + Marienette + Browserify ---> Efficient, modular, and scalable


Backbone -----> Nginx -----> Varnish -----> Node -----> MongoDB
	|
	|
	V
S3 / Cloudfront

