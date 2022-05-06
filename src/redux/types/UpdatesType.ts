export interface DailyUpdate {
    data: DailyData;
    update: DailyUpdateDetail;
};

export interface DailyData {
    id: number;
    jumlah_odp: number;
    jumlah_pdp: number;
    total_spesimen: number;
    total_spesimen_negatif: number;
}

export interface DailyUpdateDetail {
    penambahan: Penambahan;
    harian: Array<Harian>;
    total: any;
}

export interface Penambahan {
    jumlah_positif: number;
    jumlah_meninggal: number;
    jumlah_sembuh: number;
    jumlah_dirawat: number;
    tanggal: string;
    created: string;
}

export interface Harian {
    key_as_string: string;
    key: number;
    doc_count: number;
    jumlah_meninggal: { value: number };
    jumlah_sembuh: { value: number };
    jumlah_positif: { value: number };
    jumlah_dirawat: { value: number };
    jumlah_positif_kum: { value: number };
    jumlah_sembuh_kum: { value: number };
    jumlah_meninggal_kum: { value: number };
    jumlah_dirawat_kum: { value: number };
}

export interface TotalDaily {
    jumlah_positif: number;
    jumlah_dirawat: number;
    jumlah_sembuh: number;
    jumlah_meninggal: number;
}

// positive
export interface PositiveData {
    total: number;
    date: Date | string;
    cumulative: number | null;
}

export enum UpdateActionType {
    SET_OVERALL_UPDATE = 'SET_OVERALL_UPDATE',
    SET_TOTAL_POSITIVE_PERWEEK = 'SET_TOTAL_POSITIVE_PERWEEK',
    SET_POSITIVE_PERSIXMONTH = 'SET_POSITIVE_PERSIXMONTH',
    SET_TOTAL_DEATH_PERWEEK = 'SET_TOTAL_DEATH_PERWEEK',
    SET_DEATH_PERSIXMONTH = 'SET_DEATH_PERSIXMONTH',
    SET_TOTAL_CURED_PERWEEK = 'SET_TOTAL_CURED_PERWEEK',
    SET_CURED_PERSIXMONTH = 'SET_CURED_PERSIXMONTH',
};

interface ActionOverAll {
    type: UpdateActionType.SET_OVERALL_UPDATE;
    payload: DailyUpdate;
}

interface ActionTotalPositivePerweek {
    type: UpdateActionType.SET_TOTAL_POSITIVE_PERWEEK;
    payload: number;
}

interface ActionPositivePersixmonth {
    type: UpdateActionType.SET_POSITIVE_PERSIXMONTH;
    payload: Array<PositiveData>;
}

export type UpdateAction = ActionOverAll | ActionTotalPositivePerweek | ActionPositivePersixmonth;
