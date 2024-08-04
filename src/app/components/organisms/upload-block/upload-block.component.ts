import { Component, Input } from '@angular/core';

@Component({
	selector: 'upload-block',
	standalone: true,
	imports: [],
	template: `
    <div
      class="flex flex-col items-center justify-center surface rounded-3xl p-8 py-14"
      (click)="fileInput.click()"
      style="cursor: pointer;"
    >
      <input
				[name]="name"
        type="file"
        #fileInput
        accept=".csv, .pdf, .json"
        (change)="onFileSelected($event)"
        style="display: none;"
      />
      <span class="material-symbols-rounded color-on-surface text-5xl mb-4">
        cloud_upload
      </span>
      <span class="color-on-surface text-lg">{{ fileName }}</span>
    </div>
  `,
})
export class UploadBlockComponent {
	@Input() fileName: string = 'Upload File';
	@Input() name: string = '';

	onFileSelected(event: Event): void {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			const file = input.files[0];
			this.fileName = file.name;
		}
	}
}
