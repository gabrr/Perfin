import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconBlockComponent } from '@app/components/atoms/icon-block/icon-block.component';
import { WordBlockComponent } from '@app/components/atoms/word-block/word-block.component';
import { UploadBlockComponent } from '@app/components/organisms/upload-block/upload-block.component';
import { formEventManager } from '@app/utils/formEventManager';

@Component({
	selector: 'admin',
	standalone: true,
	imports: [
		CommonModule,
		RouterModule,
		WordBlockComponent,
		IconBlockComponent,
		UploadBlockComponent,
	],
	templateUrl: 'admin.component.html',
})
export class AdminComponent {
	categories = ['Food', 'Transport', 'Need'];
	timelineCategories = ['credit:Rico', 'credit:Inter', 'debit:gabrr'];

	addNewCategory() {
		this.categories.push('New Category');
	}

	addNewTimelineCategory() {
		this.timelineCategories.push('new:Category');
	}

	uploadTransactions(event: SubmitEvent) {
		const files: File[] = formEventManager(event);

		for (const file of files) {
			const formData = new FormData();
			formData.append('file', file);
			formData.append('source', 'card:rico');


			fetch('http://localhost:8000/api/v1/transactions/uploads', {
				body: formData,
				method: 'POST',
			})
		}
	}
}