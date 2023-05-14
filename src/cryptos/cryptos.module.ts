import { Module } from '@nestjs/common';
import { CryptosFactory } from './cryptos.factory';
import { CryptosEth } from './cryptos.eth';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [],
    controllers: [],
    providers: [CryptosFactory, CryptosEth],
    exports: [CryptosFactory, CryptosEth]
})
export class CryptosModule { }
