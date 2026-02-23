const STORAGE_KEY = 'japan-dialog-pos';

class MapStore {
    selected = $state<{ id: string; title: string } | null>(null);
    dialogLeft = $state(100);
    dialogTop = $state(100);

    constructor() {
        if (typeof window !== 'undefined') {
            try {
                const saved = localStorage.getItem(STORAGE_KEY);
                if (saved) {
                    const { left, top } = JSON.parse(saved);
                    if (typeof left === 'number') this.dialogLeft = left;
                    if (typeof top === 'number') this.dialogTop = top;
                }
            } catch { /* ignore corrupted storage */ }
        }
    }

    select(id: string, title: string) {
        this.selected = { id, title };
    }

    clear() {
        this.selected = null;
    }

    savePosition() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            left: this.dialogLeft,
            top: this.dialogTop
        }));
    }
}

export const mapState = new MapStore();
