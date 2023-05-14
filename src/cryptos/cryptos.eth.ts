import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Web3 from 'web3';


@Injectable()
export class CryptosEth implements CryptosInterface {

    private web3;

    constructor(
        private configService: ConfigService
    ) {
    }

    private onModuleInit() {
        this.web3 = new Web3(this.configService.get("ETH_URL"));
    }

    public sendTx() {

    };

    public getTx(transactions: string) {

    };

    public getBalance(walletAddress: string) {

    };

    //health체크용
    public async isSyncing(): Promise<boolean> {
        let test = this.web3.eth.getNodeInfo().then(console.log());
        console.log(test);
        return true;
        // return await this.web3.isSyncing();
    };
}