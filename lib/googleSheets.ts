interface ApiResponse<T> {
  data: T;
  error?: string;
}

export async function fetchGoogleSheet<T = any[]>(
  range: string
): Promise<T> {
  try {
    const response = await fetch(
      `/api/sheets?range=${encodeURIComponent(range)}`
    );

    if (!response.ok) {
      const error: ApiResponse<null> = await response.json();
      throw new Error(error.error || 'Failed to fetch sheet data');
    }

    const data: ApiResponse<T> = await response.json();
    return data.data || ([] as T);
  } catch (error) {
    console.error('Error fetching Google Sheet:', error);
    throw error;
  }
}