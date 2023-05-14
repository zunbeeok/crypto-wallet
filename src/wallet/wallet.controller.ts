import { Controller, Get, Query } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
    constructor(
        private walletService: WalletService,
    ) {

    }
    @Get('/test')
    public test(@Query('test') test: string) {
        return this.walletService.test(test);
    }

}
