import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { CryptosModule } from 'src/cryptos/cryptos.module';

@Module({
  imports: [CryptosModule],
  providers: [WalletService],
  controllers: [WalletController],
  // exports: [WalletService]
})
export class WalletModule { }
