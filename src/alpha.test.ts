import { withRetry } from "./alpha";

let failures = 0;
const flaky = async () => {
	failures += 1;
	if (failures < 3) throw new Error("flaky");
	return "ok";
};

const value = await withRetry(flaky);
if (value !== "ok") throw new Error("withRetry should eventually succeed");
console.log("alpha.test: ok");
