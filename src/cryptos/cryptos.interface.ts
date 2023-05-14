interface CryptosInterface {

    sendTx();

    getTx(transactions: string);

    getBalance(walletAddress: string);

    //health체크용z
    isSyncing(): Promise<boolean>;
}