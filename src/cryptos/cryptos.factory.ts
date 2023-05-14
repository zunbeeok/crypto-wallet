import { Injectable } from "@nestjs/common";
import { CryptosEth } from "./cryptos.eth";


//선택한 네트워크 별로 객체를 생성해주는 팩토리.
@Injectable()
export class CryptosFactory {
    constructor(private cryptosEth: CryptosEth) {
    }

    getSdk(type: string): CryptosInterface {
        const UpperType = type.toUpperCase();
        switch (UpperType) {
            case "ETH":
                return this.cryptosEth;
                break;
            default:
                console.log("없다 이자식아");
        }
    }

}