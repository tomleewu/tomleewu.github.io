make:
	gowatch

client:
	npx @tailwindcss/cli -i main.css -o static/dist.css --minify
