export interface MapState {
    id: string | null,
    title: string | null
}

class Map {
    data: MapState = $state({
        id: null,
        title: null
    });

    clear() {
        this.data = {
            id: null,
            title: null
        };
    }
}

export const mapState = new Map();
