build:
	npx parcel build ./index.html ./pages/**/index.html

builder:
	npx parcel build ./index.html ./pages/**/index.html --no-minify

clearcash:
	rm -rf .cache dist  