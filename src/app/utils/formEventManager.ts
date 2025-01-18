export function formEventManager(event: SubmitEvent): File[] {
	event.preventDefault();
	const form = event.currentTarget;

	if (form instanceof HTMLFormElement) {
		const formData = new FormData(form);
		const files: File[] = [];

		formData.forEach((value, key) => {
			if (value instanceof File && value.name) {
				files.push(value);
			}
		});

		return files;
	}
	return [];
}