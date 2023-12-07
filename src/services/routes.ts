import * as express from 'express';
import * as controller from './controller';

export const router = express.Router();

router.route('/presale-info').get(controller.getPresaleInfo);
router.route('/purchase-info').get(controller.getPurchaseInfo);
router.route('/mypurchase-info/:walletaddress').get(controller.getMyTokenSaleInfo);

router.route('/generate-signature').post(controller.generateSignature);
router.route('/request-sol').post(controller.requestSOL);
router.route('/process-evm').post(controller.processEVM);
router.route('/process-sol').post(controller.processSOL);
