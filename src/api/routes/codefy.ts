import { Router } from 'express';
import CodefyController from '@controllers/codefy';

const router: Router = Router();

router
  .route('/codefy')
  .get(CodefyController.getShort)

router
  .route('/:token')
  .get(CodefyController.redirectUrl)

export const Codefy: Router = router;
