// Import express
import {Router} from 'express';

// Import controller
import {
    AddQuestionCards,
    GetAllQuestionCards,
    GetQuestionCard,
    RemoveCards,
    ResetTables,
    UpdateCard
} from '../db/dbController';

// Create router
export const router = Router({strict: true});

router.get('/all', GetAllQuestionCards);

router.get('/card', GetQuestionCard);

router.post('/card', GetQuestionCard);

router.post('/cards', AddQuestionCards);

router.put('/reset', ResetTables);

router.delete('/delete', RemoveCards);

router.put('/card', UpdateCard);
