const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'7d4792ed-b7a5-48a6-b866-e29cfba9843a'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
