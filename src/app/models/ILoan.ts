export interface ILoan {
    bookId?:     number;
    bookName:    string;
    userId?:     number;
    userName:    string;
    loanDate?:   Date;
    returnDate?: Date;
    state:       boolean;
}