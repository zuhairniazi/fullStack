import { APIRequestContext } from '@playwright/test';

export class ItemsClient {
    constructor(private readonly request: APIRequestContext) { }

    async createItem(apiBaseUrl: string, payload: { name: string }) {
        const url = `${apiBaseUrl}/api/items`;
        const res = await this.request.post(url, { data: payload });

        if (!res.ok()) {
            throw new Error(
                `createItem failed
URL: ${url}
Status: ${res.status()}
Response: ${await res.text()}`
            );
        }

        return (await res.json()) as { id: string; name: string };
    }

    async deleteItem(apiBaseUrl: string, id: string) {
        const url = `${apiBaseUrl}/api/items/${id}`;
        const res = await this.request.delete(url);

        if (!res.ok()) {
            throw new Error(
                `deleteItem failed
URL: ${url}
Status: ${res.status()}
Response: ${await res.text()}`
            );
        }
    }
}
