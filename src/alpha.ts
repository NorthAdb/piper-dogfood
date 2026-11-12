// P1-7 后续手测 PR A：给导出工具加一个简单的重试包装。
// 目的：让仓库管家的拍板详情里能看到多文件改动与描述摘录。
export async function withRetry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {
	let lastError: unknown;
	for (let i = 0; i < attempts; i += 1) {
		try {
			return await fn();
		} catch (err) {
			lastError = err;
		}
	}
	throw lastError;
}
