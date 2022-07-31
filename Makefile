make:
	gowatch

client:
	npx tailwindcss -w -i main.css -o static/dist.css
