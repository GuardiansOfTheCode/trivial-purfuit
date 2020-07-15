import {Table, Column, CreatedAt, UpdatedAt, DeletedAt, Model, HasMany} from 'sequelize-typescript';

@Table
class Question extends Model<Question> {
    @Column
    question?: string;

    @Column
    correctAnswer?: string;

    @Column
    incorrectAnswers?: string;

    @CreatedAt
    creationDate?: Date;

    @UpdatedAt
    updatedOn?: Date;

    @DeletedAt
    deletionDate?: Date;

    constructor(question: string, correctAnswer: string, incorrectAnswers: string) {
        super();

    }

}
