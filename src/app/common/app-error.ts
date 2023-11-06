export class AppError {
    originalError: any;
    constructor(private _originalError? : any) {
        this.originalError = _originalError;
    }
}