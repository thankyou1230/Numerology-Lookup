build: 
	cd user-frontend && ng build --prod --base-href . --output-path ../hello/www/ && 	cd ../hello && cordova run android --device
