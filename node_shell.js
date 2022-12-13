const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'cc1edefa-fc39-45c6-88fa-cec08ef7ca0a'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
