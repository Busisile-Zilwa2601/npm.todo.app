const BASE_URL = 'https://jsonplaceholder.typicode.com';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
 
interface ApiRequestOptions<TBody> {
    method?: RequestMethod;
    body?: TBody;
}

export async function apiRequest<TResponse, TBody = unknown>(
    endpoint: string,
    options: ApiRequestOptions<TBody> = {}
): Promise<TResponse> {
    const { method = 'GET', body } = options;

    const headers: HeadersInit = {
        'Content-Type': 'application/json',
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}, message: ${response.statusText}`);
    }

    const data = await response.json();
    return data as TResponse;
}