export interface Debour {
    id: string;
    date: Date;
    libelle: string;
    entreeTND?: number; // L'entrée peut être optionnelle
    sortieTND?: number; // La sortie peut être optionnelle
    disponibleTND: number;
}
