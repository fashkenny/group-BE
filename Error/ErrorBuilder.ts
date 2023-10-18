export enum HTTP {
    OK = 200,
    CREATED = 201,
    UPDATE = 203,
    DELETE = 204,
    BAD_REQUEST = 404
}

interface iError {
    name: string;
    message: string;
    status: HTTP;
    success: boolean;
}
export class mainError extends Error {
    public readonly name: string;
    public readonly message: string;
    public readonly status: HTTP;
    public readonly success: boolean = false;

    constructor(arrg: iError) {
        super(arrg.message);

        this.name = arrg.name;
        this.message = arrg.message;
        this.status = arrg.status;
        if (this.success === undefined) {
            this.success = arrg.success;
        }

        Error.captureStackTrace
     }
}

