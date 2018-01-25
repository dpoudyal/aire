declare module "aire/lib/lang" {

    export const parseBoolean: (a: any) => boolean;

    export const range: (a: number, b: number) => number[];

    export class UUID {

        public readonly value: string;

        constructor(value: string);

        static random(): string;

        static fromString(str: string): UUID;

        static randomBytes(): number[];

        static randomUUID(): UUID;
    }

}

declare module "aire/api/storage" {


    export enum StorageMode {
        Cookie,
        Local
    }


    export interface BrowserStorage {
        get(key: string): string;

        set(key: string, value: string): string;

        clear(key: string);

        contains(key: string): boolean;
    }

    export class CookieStorage implements BrowserStorage {
        get(key: string): string;

        set(key: string, value: string): string;

        clear(key: string);

        contains(key: string): boolean;

    }

    export const Cookies: BrowserStorage;
    export const Local: BrowserStorage;

    export function clear(key: string, mode: StorageMode): string;
    export function set(key: string, value: string, mode: StorageMode): string;
    export function get(key: string, mode: StorageMode): string;
}

declare module "aire/api/security" {
    import {NavigationInstruction, Next, PipelineStep} from "aurelia-router";

    export class Token {
        static CookieKey: string;

        static HeaderKey: string;

        value: string;

        constructor(value?: string);

    }


    export class AuthenticationManager {

        login(user: User): Promise<Authentication>

        getAuthentication(): Promise<User>;

    }

    export class Authentication {
        type: string;
        token: Token;
        principal: User;

        constructor(a?: any)
    }

    export class SecurityService {
        isActive(): Promise<boolean>

        login(u: User): Promise<Authentication>

        activate(u: User): Promise<Activation>;

        validate(token: Token): Promise<boolean>;

        authenticateByToken(token: Token): Promise<Authentication>;
    }

    export class Activation {
        public activator: User;
        public temporaryPassword: string;

        constructor(a?: any);
    }


    export class User {
        public username: string;
        public password: string;
        public firstName: string;
        public lastName: string;
        public emailAddress: string;
        public phoneNumber: string;

        constructor(v?: any);

        toJson(): Object;
    }

    export class ActivationStep implements PipelineStep {
        constructor(service: SecurityService,
                    activationLocation: string);


        run(instruction: NavigationInstruction, next: Next): Promise<any>;
    }
}