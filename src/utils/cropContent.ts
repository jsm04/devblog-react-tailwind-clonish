export function cropContent(content: string, start: number = 0, finish: number = 24): string {
	const processed = content.split(' ');
	return processed.splice(0, 24).join(' ');
}
