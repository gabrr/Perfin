import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	private baseUrl: string;

	constructor(private http: HttpClient) {
		this.baseUrl = "http://localhost:8000/api/v1"
	}

	get(endpoint: string) {
		return this.http.get(`${this.baseUrl}/${endpoint}`);
	}

	post(endpoint: string, data: any) {
		console.log(endpoint, data)
		return this.http.post(`${this.baseUrl}/${endpoint}`, data);
	}

	put(endpoint: string, data: any) {
		return this.http.put(`${this.baseUrl}/${endpoint}`, data);
	}

	delete(endpoint: string) {
		return this.http.delete(`${this.baseUrl}/${endpoint}`);
	}
}
