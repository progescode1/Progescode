export interface Facture {
    id:number;
    numFacture: string;
    idClient: string;
    dateFacture: Date;
    datePaiement?: Date; // Le paiement peut être optionnel
    nomProduit: string;
    nomService: string;
    quantite: number;
    prix: number;
    total: number;
    tva: number;
    totalTTC: number;
}
