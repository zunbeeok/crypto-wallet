import { Injectable } from '@nestjs/common';
import { CryptosFactory } from 'src/cryptos/cryptos.factory';

@Injectable()
export class WalletService {
    constructor(private cryptosFactory: CryptosFactory) {

    }

    public async test(type: string) {
        const eth = this.cryptosFactory.getSdk(type);
        console.log(await eth.isSyncing());
    }
}
