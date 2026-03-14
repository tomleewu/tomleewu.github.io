make:
	gowatch

client:
	npx @tailwindcss/cli -w -i main.css -o static/dist.css
