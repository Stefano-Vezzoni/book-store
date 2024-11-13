export interface IFilterOptions {
    id: number;
    filterOptions: string[];
}

export async function fetchFilterOptions(): Promise<IFilterOptions> {
    const response = await fetch("http://localhost:5000/filters/1");

    if (!response.ok) {
        throw new Error("Failed to fetch filter options");
    }

    const data = await response.json();
    return data;
}
