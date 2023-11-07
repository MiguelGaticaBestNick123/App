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

    async register(email: string, password: string, role: string) {
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

    private updateUserData(user: any, role: string) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        return userRef.set({
            uid: user.uid,
            email: user.email,
            roles: {
                [role]: true
            }
        }, { merge: true });
    }

    canRead(user: any): boolean {
        const allowed = ['profesor', 'alumno'];
        return this.checkAuthorization(user, allowed);
    }

    private checkAuthorization(user: any, allowedRoles: any[]): boolean {
        if (!user) return false;
        for (const role of allowedRoles) {
            if (user.roles[role]) {
                return true;
            }
        }
        return false;
    }
}
