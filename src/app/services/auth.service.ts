import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user$: Observable<any>;

    constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
        this.user$ = this.afAuth.authState.pipe(
            switchMap((user: any) => {
                if (user) {
                    return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
                } else {
                    return of(null);
                }
            })
        );
    }

    async register(email: string, password: string) {
        try {
            const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
            console.log('Usuario registrado exitosamente');
            return result;
        } catch (error) {
            console.error('Error al registrar al usuario', error);
            throw error;
        }
    }

    async login(email: string, password: string) {
        try {
            const credential = await this.afAuth.signInWithEmailAndPassword(email, password);
            return credential;
        } catch (error: any) {
            console.error(error);
            throw error;
        }
    }

    logout() {
        return this.afAuth.signOut();
    }
    getCurrentUser() {
        return this.afAuth.currentUser;
    }
    async resetPassword(email: string): Promise<void> {
        return this.afAuth.sendPasswordResetEmail(email);
    }
}
