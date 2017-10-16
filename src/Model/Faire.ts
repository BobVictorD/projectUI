import { Niveau } from './Niveau';
import { User } from './User';
import { Activite } from './Activite';
import { Spot } from './Spot';

export class Faire {
    id: number;
    activite: Activite;
    user: User;
    spot: Array<Spot>;
    niveau: Niveau;
}
