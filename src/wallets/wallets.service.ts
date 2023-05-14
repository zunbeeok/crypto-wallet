

interface WalletService extends Wallet {
    /**
     * 출금.
     */
    withdraw(): void;

    /**
     * 지갑의 잔액을 조회한다.
     */
    getBalance(): void;

    /**
     * 트랜잭션을 가져온다.
     */
    getTx(): void;


}